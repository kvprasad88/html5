import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  displayBrands = true;
  displayfilterBrands = false;
  constructor() { }

  ngOnInit() {
  }

  getCategories() {
    this.displayBrands = false;
    this.displayfilterBrands = true;
  }
  back() {
    this.displayBrands = true;
    this.displayfilterBrands = false;
  }
}
