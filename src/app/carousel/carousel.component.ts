import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images = '../../assets/images/carousel/mb1.jpeg';
  images2 = '../../assets/images/carousel/mb2.jpeg';
  images3 = '../../assets/images/carousel/mb3.jpg';
  constructor() { }

  ngOnInit() {
  }

}
