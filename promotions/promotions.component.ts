import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  displayPromotions = true;
  promotionCategory = false;
  constructor() { }

  ngOnInit() {
  }

  getCategory() {
    this.displayPromotions = false;
    this.promotionCategory = true;
  }
  back() {
    this.displayPromotions = true;
    this.promotionCategory = false;
  }
}
