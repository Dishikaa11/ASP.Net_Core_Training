using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

class Program
{
    static void Main()
    {
        // Input paragraph
        string text = "The quick brown fox jumps over the lazy dog. " +
                      "The fox is quick and the dog is lazy. " +
                      "Quick brown fox jumps over the lazy dog again.";

        int N = 3;

        // Convert to lowercase
        text = text.ToLower();

        // Remove punctuation
        text = Regex.Replace(text, @"[^\w\s]", "");

        // Split into words
        string[] words = text.Split(
            new char[] { ' ' },
            StringSplitOptions.RemoveEmptyEntries
        );

        // Dictionary to store word frequencies
        Dictionary<string, int> frequency = new Dictionary<string, int>();

        // Count frequency of each word
        foreach (string word in words)
        {
            if (frequency.ContainsKey(word))
            {
                frequency[word]++;
            }
            else
            {
                frequency[word] = 1;
            }
        }

        Console.WriteLine("--- Word Frequency Analysis ---\n");

        // Total words
        Console.WriteLine("Total words: " + words.Length);

        // Unique words
        Console.WriteLine("Unique words: " + frequency.Count);

        // ---------------------------------------------------
        // Top N frequent words
        // ---------------------------------------------------

        Console.WriteLine("\nTop " + N + " Frequent Words:\n");

        var topWords = frequency
                        .OrderByDescending(x => x.Value)
                        .ThenBy(x => x.Key)
                        .Take(N);

        foreach (var item in topWords)
        {
            Console.WriteLine(item.Key + ": " +
                              item.Value + " times");
        }

        // ---------------------------------------------------
        // Words appearing exactly once
        // ---------------------------------------------------

        Console.WriteLine("\nWords appearing exactly once:\n");

        var singleWords = frequency
                          .Where(x => x.Value == 1)
                          .Select(x => x.Key);

        Console.WriteLine(string.Join(", ", singleWords));

        // ---------------------------------------------------
        // Average frequency
        // ---------------------------------------------------

        double average =
            (double)words.Length / frequency.Count;

        Console.WriteLine("\nAverage frequency: " +
                          average.ToString("0.00") +
                          " times per unique word");
    }
}