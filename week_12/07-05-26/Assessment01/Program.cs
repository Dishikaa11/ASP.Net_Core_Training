using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // Dictionary to store ProductId and Quantity
        Dictionary<int, int> inventory = new Dictionary<int, int>();

        // Read number of operations
        int n = int.Parse(Console.ReadLine());

        for (int i = 0; i < n; i++)
        {
            string input = Console.ReadLine();

            // Split command
            string[] parts = input.Split(' ');

            string operation = parts[0];

            // ADD Operation
            if (operation == "ADD")
            {
                int productId = int.Parse(parts[1]);
                int quantity = int.Parse(parts[2]);

                // If product already exists, increase quantity
                if (inventory.ContainsKey(productId))
                {
                    inventory[productId] += quantity;
                }
                else
                {
                    inventory[productId] = quantity;
                }
            }

            // REMOVE Operation
            else if (operation == "REMOVE")
            {
                int productId = int.Parse(parts[1]);
                int quantity = int.Parse(parts[2]);

                // Check if product exists and enough stock is available
                if (inventory.ContainsKey(productId) &&
                    inventory[productId] >= quantity)
                {
                    inventory[productId] -= quantity;
                }
                else
                {
                    Console.WriteLine("Insufficient stock for Product " + productId);
                }
            }

            // CHECK Operation
            else if (operation == "CHECK")
            {
                int productId = int.Parse(parts[1]);

                if (inventory.ContainsKey(productId))
                {
                    Console.WriteLine("Product " + productId + ": " +
                                      inventory[productId] + " units");
                }
                else
                {
                    Console.WriteLine("Product " + productId + ": 0 units");
                }
            }

            // BULK Operation
            else if (operation == "BULK")
            {
                // Example: 1003:75,1004:40
                string[] products = parts[1].Split(',');

                foreach (string product in products)
                {
                    string[] data = product.Split(':');

                    int productId = int.Parse(data[0]);
                    int quantity = int.Parse(data[1]);

                    if (inventory.ContainsKey(productId))
                    {
                        inventory[productId] += quantity;
                    }
                    else
                    {
                        inventory[productId] = quantity;
                    }
                }
            }

            // DISPLAY Operation
            else if (operation == "DISPLAY")
            {
                Console.WriteLine("--- Current Inventory ---");

                foreach (var item in inventory)
                {
                    // Display only products with quantity > 0
                    if (item.Value > 0)
                    {
                        Console.WriteLine(item.Key + ": " +
                                          item.Value + " units");
                    }
                }
            }
        }
    }
}