import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';   // ✅ ADD THIS

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [FormsModule, CommonModule],   // ✅ ADD CommonModule
  templateUrl: './appointment.html',
  styleUrls: ['./appointment.css'] 
})
export class AppointmentComponent {

  patientName: string = '';
  doctor: string = '';
  date: string = '';
  consultationType: string = '';
  symptoms: string = '';

  fee: number = 0;
  message: string = '';

  doctors = [
  'Dr. Rajesh Sharma (Cardiologist)',
  'Dr. Neha Mehta (Dermatologist)',
  'Dr. Amit Gupta (Orthopedic)',
  'Dr. Priya Verma (Gynecologist)',
  'Dr. Rahul Singh (General Physician)'
];

  updateFee() {
    if (this.consultationType === 'Online') {
      this.fee = 300;
    } else if (this.consultationType === 'Offline') {
      this.fee = 500;
    }
  }

  bookAppointment() {
    if (this.patientName && this.doctor && this.date && this.consultationType) {
      this.message = "✅ Appointment Booked Successfully!";
    } else {
      this.message = "❌ Please fill all fields!";
    }
  }

  // Disable past dates
  get today() {
    return new Date().toISOString().split('T')[0];
  }
}