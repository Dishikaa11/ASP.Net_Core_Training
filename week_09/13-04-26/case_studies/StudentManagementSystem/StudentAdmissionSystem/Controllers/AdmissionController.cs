using Microsoft.AspNetCore.Mvc;
using StudentAdmissionSystem.Model;
using Microsoft.AspNetCore.Http;

namespace StudentAdmissionSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdmissionController : Controller
    {
        private static List<Admission> admissions = new();

        [HttpGet]
        public ActionResult Get() => Ok(admissions);

        [HttpPost]
        public ActionResult Add(Admission admission)
        {
            admissions.Add(admission);
            return Ok(admissions);
        }
    }
}
