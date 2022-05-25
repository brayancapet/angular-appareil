import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  secondes!: number;
  isAuth!: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    const counter = interval(1000);
    counter.subscribe({
      next: (value) => (this.secondes = value),
      error: (error) => console.log('Uh-Oh, an error occurred! :' + error),
      complete: () => console.info('Observable complete!'),
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
  }

  onSignOut() {
    this.authService.signOutUser();
  }
}
