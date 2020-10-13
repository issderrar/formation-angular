import {Component} from '@angular/core';
import {Post} from './models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  article1 = new Post('Mon premier article', 'Lorem ipsum dolor sit amet');
  article2 = new Post('Mon second article', 'Lorem ipsum dolor sit amet');
  article3 = new Post('Mon troisième article', 'Lorem ipsum dolor sit amet');

   articles = [
    this.article1,
    this.article2,
    this.article3
  ];


  title = 'mon-projet-angular';

  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  onAllumer = () => {
    console.log('On allume tout');
  }
}
