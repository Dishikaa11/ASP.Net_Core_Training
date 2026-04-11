using System;
namespace EmployeePortal.models.Attributes
{

	public class MinSalaryAttribute : ValidationAttribute
	{
		private readonly int minSalary;
		public MinSalaryAttribute(int salary)
		{
			this.minSalary = salary;
		}

		protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
		{
			if (value is decimal salary && minSalary > salary)
			{
				return new ValidationResult($"Salary must be at least {minSalary}.");
			}
			return ValidationResult.Success;
		}
	}
}
