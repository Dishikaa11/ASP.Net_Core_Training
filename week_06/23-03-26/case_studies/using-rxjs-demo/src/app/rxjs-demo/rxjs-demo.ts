import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, fromEvent, BehaviorSubject } from 'rxjs';
import { map, debounceTime, switchMap, mergeMap, filter, subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rxjs-demo.html',
  styleUrl: './rxjs-demo.css',
})
export class RxjsDemoComponent implements OnInit, AfterViewInit {

  @ViewChild('clickBtn') clickBtn1!: ElementRef;
  @ViewChild('searchBox') searchBox1!: ElementRef;

  observableOutput: any[] = [];
  mapOutput: any[] = [];
  filterOutput: any[] = [];
  multiMapOutput: any[] = [];
  behaviorOutput: any[] = [];
  clickOutput: string = '';
  searchOutput: any[] = [];
  mergeMapOutput: any[] = [];

  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    const observable$ = of(1, 2, 3, 4, 5);

    observable$.subscribe(val => this.observableOutput.push(val));

    observable$.pipe(
      map(x => x * 10)
    ).subscribe(res => this.mapOutput.push(res));

    
    observable$.pipe(
      map(x => x % 2 === 0 ? x * 100 : null)
    ).subscribe(res => {
      if (res !== null) this.filterOutput.push(res);
    });

    observable$.pipe(
      map(x => x + 1),
      map(x => x * 2),
      map(x => `Final: ${x}`)  
    ).subscribe(res => this.multiMapOutput.push(res));

    of(1, 2, 3).pipe(
      mergeMap(id =>
        this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      )
    ).subscribe(res => {
      this.mergeMapOutput.push(res);
    });
  }

  ngAfterViewInit(): void {

    fromEvent(this.searchBox1.nativeElement, 'input').pipe(

      debounceTime(500),

      map((event: any) => (event.target as HTMLInputElement).value.trim()),

      filter((text: any) => text.length >= 3),

      switchMap((text: any) => {
        this.loading = true;
        return this.http.get<any[]>(
          `https://jsonplaceholder.typicode.com/posts?q=${text}`
        );
      })

    ).subscribe({
      next: (res: any[]) => {
        this.searchOutput = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('API Error: ', err);
        this.searchOutput = [];
        this.loading = false;
      },
      complete: () => {
        console.log('Search Stream Completed');
      }
    });
  }
}