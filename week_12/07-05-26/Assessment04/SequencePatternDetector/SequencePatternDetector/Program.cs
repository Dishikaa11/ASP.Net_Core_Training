using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        // Input array
        int[] arr = { 1, 3, 2, 3, 3, 4, 5, 3, 6, 7, 8, 9, 10, 3 };

        int K = 2;

        Console.WriteLine("--- Access Pattern Analysis ---\n");

        // ---------------------------------------------------
        // 1. Longest Consecutive Sequence
        // ---------------------------------------------------

        HashSet<int> set = new HashSet<int>(arr);

        int longestLength = 0;
        int startNumber = 0;

        foreach (int num in set)
        {
            // Check if num is starting point
            if (!set.Contains(num - 1))
            {
                int currentNum = num;
                int currentLength = 1;

                // Count consecutive numbers
                while (set.Contains(currentNum + 1))
                {
                    currentNum++;
                    currentLength++;
                }

                // Update longest sequence
                if (currentLength > longestLength)
                {
                    longestLength = currentLength;
                    startNumber = num;
                }
            }
        }

        Console.Write("Longest Consecutive Sequence: ");

        for (int i = 0; i < longestLength; i++)
        {
            Console.Write(startNumber + i);

            if (i != longestLength - 1)
            {
                Console.Write(",");
            }
        }

        Console.WriteLine(" (Length: " + longestLength + ")\n");

        // ---------------------------------------------------
        // 2. Most Frequent Element
        // ---------------------------------------------------

        Dictionary<int, int> frequency = new Dictionary<int, int>();

        foreach (int num in arr)
        {
            if (frequency.ContainsKey(num))
            {
                frequency[num]++;
            }
            else
            {
                frequency[num] = 1;
            }
        }

        int mostFrequent = arr[0];
        int maxCount = frequency[arr[0]];

        foreach (var item in frequency)
        {
            if (item.Value > maxCount)
            {
                mostFrequent = item.Key;
                maxCount = item.Value;
            }
        }

        Console.WriteLine("Most Frequent Element: " +
                          mostFrequent +
                          " (appears " +
                          maxCount +
                          " times)\n");

        // ---------------------------------------------------
        // 3. First Non-Repeating Element
        // ---------------------------------------------------

        int firstNonRepeating = -1;

        foreach (int num in arr)
        {
            if (frequency[num] == 1)
            {
                firstNonRepeating = num;
                break;
            }
        }

        Console.WriteLine("First Non-Repeating Element: " +
                          firstNonRepeating + "\n");

        // ---------------------------------------------------
        // 4. Pairs with Difference K
        // ---------------------------------------------------

        Console.WriteLine("Pairs with Difference " + K + ":\n");

        HashSet<int> uniqueNumbers = new HashSet<int>(arr);

        foreach (int num in uniqueNumbers)
        {
            if (uniqueNumbers.Contains(num + K))
            {
                Console.WriteLine("(" + num + ", " +
                                  (num + K) + ")");
            }
        }

        Console.WriteLine();

        // ---------------------------------------------------
        // 5. Majority Element
        // ---------------------------------------------------

        int majorityElement = mostFrequent;
        double percentage =
            ((double)maxCount / arr.Length) * 100;

        if (maxCount > arr.Length / 2)
        {
            Console.WriteLine("Majority Element: " +
                              majorityElement +
                              " (appears " +
                              maxCount +
                              " out of " +
                              arr.Length +
                              " times)");
        }
        else
        {
            Console.WriteLine("Majority Element: " +
                              majorityElement +
                              " (appears " +
                              maxCount +
                              " out of " +
                              arr.Length +
                              " times - " +
                              percentage.ToString("0.0") +
                              "% - No majority)");
        }
    }
}