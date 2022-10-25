import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carosuel2',
  templateUrl: './carosuel2.component.html',
  styleUrls: ['./carosuel2.component.scss']
})
export class Carosuel2Component implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }

  pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;
  ngOnInit(): void {
  }

}
