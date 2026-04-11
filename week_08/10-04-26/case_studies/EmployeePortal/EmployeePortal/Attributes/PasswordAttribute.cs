using System;
namespace EmployeePortal.models.Attributes
{

	public class passwordAttribute : ValidationAttribute
    {
		private readonly string password;
		public passwordAttribute(string password)
		{
			this.password = password;
		}

		protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
		{
			if (password.Length < 8 || !password.Any(char.IsUpper) || !password.Any(char.IsLower) || !password.Any(char.IsDigit))
			{
				return new ValidationResult($"Password must be at least 8 characters long and contain an uppercase letter, a lowercase letter, and a digit.");
			}
			return ValidationResult.Success;
        }
    }
}
