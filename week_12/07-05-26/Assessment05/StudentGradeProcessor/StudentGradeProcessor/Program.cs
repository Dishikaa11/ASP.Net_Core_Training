using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        // Number of students
        int n = 4;

        // Student names
        string[] students = { "John", "Sarah", "Mike", "Emma" };

        // Grades array
        int[,] grades =
        {
            {85, 90, 78, 92},
            {95, 88, 91, 89},
            {70, 65, 80, 75},
            {88, 92, 94, 96}
        };

        Console.WriteLine("--- Student Grade Report ---\n");

        double highestAverage = 0;
        string topPerformer = "";

        // HashSet for unique grades
        HashSet<int> uniqueGrades = new HashSet<int>();

        // ---------------------------------------------------
        // Process each student
        // ---------------------------------------------------

        for (int i = 0; i < n; i++)
        {
            int sum = 0;
            int highest = grades[i, 0];
            int lowest = grades[i, 0];

            // Store current student's grades
            List<int> currentGrades = new List<int>();

            for (int j = 0; j < 4; j++)
            {
                int grade = grades[i, j];

                currentGrades.Add(grade);

                sum += grade;

                // Find highest grade
                if (grade > highest)
                {
                    highest = grade;
                }

                // Find lowest grade
                if (grade < lowest)
                {
                    lowest = grade;
                }

                // Add grade to HashSet
                uniqueGrades.Add(grade);
            }

            double average = (double)sum / 4;

            // Print student report
            Console.WriteLine(
                students[i] +
                ": Average = " +
                average.ToString("0.00") +
                ", Highest = " +
                highest +
                ", Lowest = " +
                lowest
            );

            // Check top performer
            if (average > highestAverage)
            {
                highestAverage = average;
                topPerformer = students[i];
            }
        }

        // ---------------------------------------------------
        // Top Performer
        // ---------------------------------------------------

        Console.WriteLine("\nTop Performer: " +
                          topPerformer +
                          " (Average: " +
                          highestAverage.ToString("0.00") +
                          ")\n");

        // ---------------------------------------------------
        // Students with all grades >= 80
        // ---------------------------------------------------

        Console.WriteLine("Students with all grades >= 80:\n");

        for (int i = 0; i < n; i++)
        {
            bool allAbove80 = true;

            List<int> studentGrades = new List<int>();

            for (int j = 0; j < 4; j++)
            {
                int grade = grades[i, j];

                studentGrades.Add(grade);

                if (grade < 80)
                {
                    allAbove80 = false;
                }
            }

            if (allAbove80)
            {
                Console.WriteLine(
                    students[i] +
                    " (" +
                    string.Join(",", studentGrades) +
                    ")"
                );
            }
        }

        // ---------------------------------------------------
        // Unique Grade Values
        // ---------------------------------------------------

        Console.WriteLine("\nUnique Grade Values Across All Students:\n");

        List<int> sortedGrades = uniqueGrades.ToList();

        sortedGrades.Sort();

        Console.WriteLine(string.Join(",", sortedGrades));

        Console.WriteLine("\nTotal unique grades: " +
                          uniqueGrades.Count);
    }
}