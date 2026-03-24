import { Component } from '@angular/core';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RxjsDemoComponent],   // ✅ IMPORTANT FIX
  templateUrl: './app.html',
})
export class AppComponent {}