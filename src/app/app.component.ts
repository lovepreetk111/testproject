import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testproject';

  currentPageIndex = 0;
  pages: any = [
    {
      pageName: 'Home',
      component: [
        {
          compId: 1,
          metadata:
            [
              {
                id: 1,
                innerData: {
                  header: 'Techkriti 6.0',
                  text: 'Lorem',
                  buttonText: 'readMore',
                },
                background: {
                  url: 'kuch toh',
                  alt: 'yeh bhi hai kych',
                },
                image: {
                  url: 'kuch hai IDK',
                  alt: 'IDK'
                },
                routeLink: 'route karo and ghar bhejo',
              },
              {
                id: 2,
                innerData: {
                  header: 'Techkriti 6.0',
                  text: 'Lorem',
                  buttonText: 'readMore',
                },
                background: {
                  url: 'kuch toh',
                  alt: 'yeh bhi hai kych',
                },
                image: {
                  url: 'kuch hai IDK',
                  alt: 'IDK'
                },
                routeLink: 'route karo and ghar bhejo',
              }],
        }
      ]
    }
  ]

  constructor() {
    console.log(this.pages)
  }
}