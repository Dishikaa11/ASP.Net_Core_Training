using ClothesStore.DTOs;
using ClothesStore.Model;
using Microsoft.AspNetCore.Mvc;

namespace ClothesStore.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : ControllerBase
    {
        
        private static List<Product> Products = new List<Product>();

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(Products);
        }

        [HttpPost]
        public IActionResult Add(ProductDTO dto)
        {
            var product = new Product
            {
                Id = Products.Count + 1,
                Name = dto.Name,
                Price = dto.Price,
                Category = dto.Category
            };

            Products.Add(product);

            return Ok(product);
        }

        [HttpGet("category/{category}")]
        public IActionResult GetByCategory(string category)
        {
            var data = Products
                .Where(p => p.Category != null && p.Category.ToLower() == category.ToLower() )
                .ToList();

            return Ok(data);
        }
    }
}