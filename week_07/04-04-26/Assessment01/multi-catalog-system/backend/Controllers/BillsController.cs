using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BillsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BillsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bill>>> GetBills()
        {
            var bills = await _context.Bills
                .Include(b => b.BillItems)
                .OrderByDescending(b => b.CreatedAt)
                .ToListAsync();

            return Ok(bills);
        }

        [HttpPost]
        public async Task<ActionResult<Bill>> CreateBill(Bill bill)
        {
            bill.CreatedAt = DateTime.Now;
            _context.Bills.Add(bill);
            await _context.SaveChangesAsync();
            return Ok(bill);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBill(int id)
        {
            var bill = await _context.Bills
                .Include(b => b.BillItems)
                .FirstOrDefaultAsync(b => b.Id == id);

            if (bill == null)
                return NotFound();

            _context.BillItems.RemoveRange(bill.BillItems);
            _context.Bills.Remove(bill);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpGet("summary")]
        public IActionResult GetSummary()
        {
            var bills = _context.Bills.ToList();

            var totalBills = bills.Count;
            var revenue = bills.Sum(b => b.TotalAmount);
            var tax = bills.Sum(b => b.Tax);
            var discount = bills.Sum(b => b.Discount);

            return Ok(new
            {
                totalBills,
                revenue,
                tax,
                discount
            });
        }
    }
}