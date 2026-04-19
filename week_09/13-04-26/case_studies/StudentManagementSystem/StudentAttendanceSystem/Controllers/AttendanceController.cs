using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StudentAttendanceSystem.Model;

namespace StudentAttendanceSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttendanceController : Controller
    {
        private static List<Attendance> attendanceRecords = new();
        [HttpGet]
        public ActionResult Get() => Ok(attendanceRecords);

        [HttpPost]
        public ActionResult Mark(Attendance attendance)
        {
            attendanceRecords.Add(attendance);
            return Ok(attendance);
        }
    }
}
