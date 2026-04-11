using System;
namespace EmployeePortal.models.Attributes
{
	public class RangeSalaryAttribute : ValidationAttribute
	{
		private readonly int minSalary;
		private readonly int maxSalary;

		public RangeSalaryAttribute(int minSalary, int maxSalary)
		{
			this.minSalary = minSalary;
			this.maxSalary = maxSalary;
		}

		protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
		{
			if (value is decimal salary && (salary < minSalary || salary > maxSalary))
			{
				return new ValidationResult($"Salary must be between {minSalary} and {maxSalary}.");
			}
			return ValidationResult.Success;
		}
	}
}
