using System;
using System.Collections.Generic;

class EmailValidator
{
    static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());
        List<string> emails = new List<string>();
        for (int i = 0; i < n; i++)
        {
            emails.Add(Console.ReadLine());
        }
        HashSet<string> uniqueEmails = new HashSet<string>();
        Dictionary<string, int> emailCount = new Dictionary<string, int>();
        List<string> orderedUniques = new List<string>();
        foreach (string email in emails)
        {

            if (!emailCount.ContainsKey(email))
            {
                emailCount[email] = 0;
                orderedUniques.Add(email);
            }
            emailCount[email]++;
        }

        Console.WriteLine($"Unique Emails ({orderedUniques.Count}):");
        foreach (string email in orderedUniques)
        {
            Console.WriteLine(email);
        }

        Console.WriteLine("\n Duplicate Emails Found: ");
        int duplicateCount = 0;
        foreach (var kvp in emailCount)
        {
            if (kvp.Value > 1)
            {
                Console.WriteLine($"{kvp.Key} ({kvp.Value} times total, {kvp.Value - 1} duplicates)");
                duplicateCount += (kvp.Value - 1);
            }
        }
        Console.WriteLine($"\n Total Unique Registrations: {orderedUniques.Count}");
        Console.WriteLine($" Duplicate Attempts: {duplicateCount}");
    }
}