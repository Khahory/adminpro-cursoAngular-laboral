import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  // Variables
  progreso: number = 60;
  constructor() { }

  ngOnInit() {
  }
}
