import { SliderService } from './../../services/slider/slider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data;
  constructor(private sliderService: SliderService) { }

  ngOnInit() {
    this.getSliders();
  }
  getSliders() {
    this.sliderService.SliderData().subscribe(result => {
      this.data = result;
      // console.log(this.data);

    });

  }
}
