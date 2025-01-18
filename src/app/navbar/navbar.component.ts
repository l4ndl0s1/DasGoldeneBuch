import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navLinks = [
    { label: 'News', url: '/news' },
    { label: 'About', url: '/about' },
    { label: 'Mission', url: '/mission' },
    { label: 'Archive', url: '/archive' },
    { label: 'Team', url: '/team' },
    { label: 'Support', url: '/support' },
    { label: 'Contact', url: '/contact' },
  ];
}
