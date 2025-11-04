import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  go_back = '/livestock/'
  menuItems = [
    { label: 'Animales', icon: 'assets/icons/animal.png', routerLink: '/livestock/animal-list'},
    { label: 'Partos', icon: 'assets/icons/cuna.png', routerLink: '/livestock/litter-list'},
    { label: 'Alimentos', icon: 'assets/icons/feed.png', routerLink: '/livestock/feed-list'},
    { label: 'Salud', icon: 'assets/icons/helfcare.png', routerLink: '/livestock/health-list'},
    { label: 'Usuarios', icon: 'assets/icons/user.png', routerLink: '/livestock/user-list'},
  ];
}
