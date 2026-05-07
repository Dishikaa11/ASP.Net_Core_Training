using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        // Original Prices
        int[] prices = { 299, 499, 199, 399, 599, 159, 699, 259 };

        int targetSum = 698;

        Console.WriteLine("--- Product Price Analysis ---\n");

        // ---------------------------------------------------
        // Original Prices
        // ---------------------------------------------------

        Console.WriteLine("Original Prices: " +
                          string.Join(", ", prices));

        // ---------------------------------------------------
        // Bubble Sort
        // ---------------------------------------------------

        int[] sortedPrices = (int[])prices.Clone();

        BubbleSort(sortedPrices);

        Console.WriteLine("\nSorted Prices (Ascending): " +
                          string.Join(", ", sortedPrices));

        // ---------------------------------------------------
        // Binary Search
        // ---------------------------------------------------

        Console.WriteLine("\nBinary Search Results:\n");

        int index1 = BinarySearch(sortedPrices, 399);

        if (index1 != -1)
        {
            Console.WriteLine("Price 399 found at index " + index1);
        }
        else
        {
            Console.WriteLine("Price 399 not found");
        }

        int index2 = BinarySearch(sortedPrices, 500);

        if (index2 != -1)
        {
            Console.WriteLine("Price 500 found at index " + index2);
        }
        else
        {
            Console.WriteLine("Price 500 not found");
        }

        // ---------------------------------------------------
        // Pairs with Target Sum
        // ---------------------------------------------------

        Console.WriteLine("\nPairs that sum to " +
                          targetSum + ":\n");

        FindPairs(sortedPrices, targetSum);

        // ---------------------------------------------------
        // Longest Increasing Subsequence
        // ---------------------------------------------------

        Console.WriteLine("\nLongest Increasing Subsequence:\n");

        List<int> lis = FindLIS(sortedPrices);

        Console.WriteLine(string.Join(", ", lis) +
                          " (Length: " + lis.Count + ")");

        // ---------------------------------------------------
        // Statistics
        // ---------------------------------------------------

        Console.WriteLine("\nStatistics:\n");

        int lowest = sortedPrices[0];
        int highest = sortedPrices[sortedPrices.Length - 1];

        double average = sortedPrices.Average();

        double median;

        int middle = sortedPrices.Length / 2;

        median = (sortedPrices[middle - 1] +
                  sortedPrices[middle]) / 2.0;

        Console.WriteLine("Lowest Price: " + lowest);

        Console.WriteLine("Highest Price: " + highest);

        Console.WriteLine("Average Price: " +
                          average.ToString("0.00"));

        Console.WriteLine("Median Price: " +
                          median.ToString("0.00"));
    }

    // ---------------------------------------------------
    // Bubble Sort Method
    // ---------------------------------------------------

    static void BubbleSort(int[] arr)
    {
        int n = arr.Length;

        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - i - 1; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    // Swap
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    // ---------------------------------------------------
    // Binary Search Method
    // ---------------------------------------------------

    static int BinarySearch(int[] arr, int target)
    {
        int left = 0;
        int right = arr.Length - 1;

        while (left <= right)
        {
            int mid = (left + right) / 2;

            if (arr[mid] == target)
            {
                return mid;
            }
            else if (arr[mid] < target)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }

        return -1;
    }

    // ---------------------------------------------------
    // Find Pairs with Given Sum
    // ---------------------------------------------------

    static void FindPairs(int[] arr, int target)
    {
        HashSet<int> seen = new HashSet<int>();

        foreach (int num in arr)
        {
            int complement = target - num;

            if (seen.Contains(complement))
            {
                Console.WriteLine("(" +
                                  complement +
                                  ", " +
                                  num + ")");
            }

            seen.Add(num);
        }
    }

    // ---------------------------------------------------
    // Longest Increasing Subsequence
    // ---------------------------------------------------

    static List<int> FindLIS(int[] arr)
    {
        List<int> lis = new List<int>();

        lis.Add(arr[0]);

        for (int i = 1; i < arr.Length; i++)
        {
            if (arr[i] > lis[lis.Count - 1])
            {
                lis.Add(arr[i]);
            }
        }

        return lis;
    }
}