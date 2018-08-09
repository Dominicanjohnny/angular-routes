import { Component, OnInit } from '@angular/core';
import { CounterService } from '../services/counter.service';


@Component({
  selector: 'app-my-second-counter',
  template: 
  `
    <p> My second counter </p>
    <button (click)="incrementCounter()"> increment </button>
  `,
  styleUrls: ['./my-second-counter.component.css'],
  // providers: [CounterService]
})

export class MySecondCounterComponent implements OnInit {
  constructor(private theCounter: CounterService) {}

  ngOnInit() {}

  incrementCounter() {
    this.theCounter.increment();
  }
}
