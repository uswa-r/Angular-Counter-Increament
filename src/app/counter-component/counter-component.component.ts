import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent implements OnInit {

  constructor() { }

  counter = 0;

  ngOnInit(): void {
  }

  increment() {
    this.counter++;
  }

}
