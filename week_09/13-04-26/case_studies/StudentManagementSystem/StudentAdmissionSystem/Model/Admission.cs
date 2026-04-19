using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace StudentAdmissionSystem.Model
{
    public class Admission
    {
        public int id { get; set; }
        public string? Studentname { get; set; }
        public string? Course { get; set; } 
        public DateTime AdmissionDate { get; set; }

    }
}
