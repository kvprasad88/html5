import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  displayTypes = true;
  displayTypeProducts = false;
  constructor() { }

  ngOnInit() {
  }

  getTypeProducts() {
    this.displayTypes = false;
    this.displayTypeProducts = true;
  }
  back() {
    this.displayTypes = true;
    this.displayTypeProducts = false;
  }
}
