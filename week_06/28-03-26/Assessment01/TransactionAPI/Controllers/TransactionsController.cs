using Microsoft.AspNetCore.Mvc;
using TransactionAPI.Data;
using TransactionAPI.Models;

namespace TransactionAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TransactionsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/transactions
        [HttpGet]
        public IActionResult GetAll()
        {
            var data = _context.Transactions.ToList();
            return Ok(data);
        }

        // GET by date
        [HttpGet("by-date/{date}")]
        public IActionResult GetByDate(DateTime date)
        {
            var data = _context.Transactions
                .Where(t => t.Date == date)
                .ToList();

            return Ok(data);
        }

        //Add DATA From UI only
        [HttpPost]
        public IActionResult AddTransaction([FromBody] Transaction transaction)
        {
            _context.Transactions.Add(transaction);
            _context.SaveChanges();
            return Ok(transaction);
        }
    }
}