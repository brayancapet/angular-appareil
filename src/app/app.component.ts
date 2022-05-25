import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isAuth = true;
  secondes!: number;
  counterSubscription!: Subscription;
  appareils!: any[];

  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyDqsHeg9D-wPDoNZCK0_LyYfdumChJAscI',
      authDomain: 'angular-tp1-9bf23.firebaseapp.com',
      databaseURL: 'https://angular-tp1-9bf23-default-rtdb.firebaseio.com',
      projectId: 'angular-tp1-9bf23',
      storageBucket: 'angular-tp1-9bf23.appspot.com',
      messagingSenderId: '270378256418',
      appId: '1:270378256418:web:59fd6a59c869467882a27b',
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe({
      next: (value) => (this.secondes = value),
      error: (error) => console.log('Uh-Oh, an error occurred! :' + error),
      complete: () => console.info('Observable complete!'),
    });
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
