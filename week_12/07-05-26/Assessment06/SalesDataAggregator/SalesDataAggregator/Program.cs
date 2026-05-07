using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        // Sales data
        List<Sale> sales = new List<Sale>()
        {
            new Sale("P001", "North", 1500),
            new Sale("P001", "South", 2000),
            new Sale("P002", "North", 3000),
            new Sale("P001", "East", 2500),
            new Sale("P002", "South", 1800),
            new Sale("P003", "North", 1200),
            new Sale("P001", "West", 2200),
            new Sale("P002", "West", 2800),
            new Sale("P003", "South", 900),
            new Sale("P002", "East", 3200)
        };

        double threshold = 2000;

        Console.WriteLine("--- Sales Report by Product and Region ---\n");

        // ---------------------------------------------------
        // Group sales by product
        // ---------------------------------------------------

        var groupedByProduct = sales.GroupBy(s => s.ProductId);

        foreach (var productGroup in groupedByProduct)
        {
            Console.WriteLine("Product " + productGroup.Key + ":\n");

            double total = 0;
            int count = 0;

            foreach (var sale in productGroup)
            {
                Console.WriteLine("  " +
                                  sale.Region +
                                  ": $" +
                                  sale.Amount);

                total += sale.Amount;
                count++;
            }

            double average = total / count;

            Console.WriteLine("\n  Total: $" +
                              total +
                              ", Average: $" +
                              average.ToString("0.00"));

            Console.WriteLine();
        }

        // ---------------------------------------------------
        // Best Selling Product by Region
        // ---------------------------------------------------

        Console.WriteLine("Best Selling Product by Region:\n");

        var groupedByRegion = sales.GroupBy(s => s.Region);

        foreach (var regionGroup in groupedByRegion)
        {
            var bestProduct = regionGroup
                              .OrderByDescending(x => x.Amount)
                              .First();

            Console.WriteLine(regionGroup.Key +
                              ": " +
                              bestProduct.ProductId +
                              " ($" +
                              bestProduct.Amount +
                              ")");
        }

        // ---------------------------------------------------
        // Underperforming Products
        // ---------------------------------------------------

        Console.WriteLine("\nUnderperforming Products (< $" +
                          threshold +
                          " average):\n");

        foreach (var productGroup in groupedByProduct)
        {
            double avg = productGroup.Average(x => x.Amount);

            if (avg < threshold)
            {
                Console.WriteLine(productGroup.Key +
                                  " ($" +
                                  avg.ToString("0.00") +
                                  ")");
            }
        }
    }
}

// Sale class
class Sale
{
    public string ProductId;
    public string Region;
    public double Amount;

    public Sale(string productId,
                string region,
                double amount)
    {
        ProductId = productId;
        Region = region;
        Amount = amount;
    }
}