import { Component, Input, OnInit } from '@angular/core';
import { IBannerCarosuelComponent } from '../service/data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent implements OnInit {
  constructor() { }
/* @Input() carousel!:IBannerCarosuelComponent */

@Input() carousel:IBannerCarosuelComponent[]=[]
 i:any = 'index';
 
 currentPosition=0;
  

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const bannerCarousel: any = document.getElementById('carouselExampleCaptions')
    bannerCarousel.addEventListener('slide.bs.carousel',(e:any) => {
      console.log(e);
      this.currentPosition = e.to;
      console.log(this.currentPosition)
    })
  }

}
