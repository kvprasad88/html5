import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
// img : any;
  constructor() { }

  ngOnInit() {
    // this.img = sessionStorage.getItem("banner");
    // console.log(this.img);
  }

}
