import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'http://localhost:5155/api/transactions';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getByDate(date: string) {
    return this.http.get<any[]>(`${this.apiUrl}/by-date/${date}`);
  }

  addTransaction(data: any) {
  return this.http.post(this.apiUrl, data);
}
}