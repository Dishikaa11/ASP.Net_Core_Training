import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransactionService } from '../services/transaction.service';

interface Transaction {
  date: string;
  description: string;
  type: number;
  amount: number;
  balance: string;
}

@Component({
  selector: 'app-record-table',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './record-table.html',
  styleUrls: ['./record-table.css']
})


export class RecordTableComponent implements OnInit {

  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];
  selectedDate: string = '';

  constructor(private service: TransactionService) {}

  newTransaction: any = {
  date: '',
  description: '',
  type: 0,
  amount: 0,
  balance: ''
};
  ngOnInit() {
  this.service.getAll().subscribe(data => {
    this.transactions = data;
    this.filteredTransactions = data;
  });
}


  // 🔹 DATA SOURCE
  getTransactions(): Transaction[] {
    return [
      {
        date: "2019-12-03",
        description: "HACKERBANK INC.",
        type: 0,
        amount: 1985.4,
        balance: "$12,234.45"
      },
      {
        date: "2019-12-03",
        description: "Coffee Shop",
        type: 1,
        amount: 10.5,
        balance: "$12,223.95"
      },
      {
        date: "2019-12-04",
        description: "Amazon",
        type: 1,
        amount: 50,
        balance: "$12,173.95"
      }
    ];
  }

  // 🔹 FILTER
  filterByDate() {
  if (!this.selectedDate) {
    this.resetFilter();
    return;
  }

  this.service.getByDate(this.selectedDate)
    .subscribe((data: any[]) => {
      this.filteredTransactions = data;
    });
}

  // 🔹 SORT
  sortByAmount(): void {
    this.filteredTransactions.sort((a, b) => a.amount - b.amount);
  }

  // 🔹 TYPE LABEL
  getType(type: number): string {
    return type === 0 ? 'Credit' : 'Debit';
  }

  resetFilter() {
  this.selectedDate = ''; // date clear
  this.filteredTransactions = [...this.transactions]; // original data wapas
}


addTransaction() {
  this.service.addTransaction(this.newTransaction)
    .subscribe(() => {

      // refresh data
      this.service.getAll().subscribe((data: any[]) => {
        this.transactions = data;
        this.filteredTransactions = data;
      });

      // reset form
      this.newTransaction = {
        date: '',
        description: '',
        type: 0,
        amount: 0,
        balance: ''
      };
    });
}
}