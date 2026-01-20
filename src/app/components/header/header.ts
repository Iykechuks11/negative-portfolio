import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // 1. Create the state variable
  isMenuOpen = false;

  // 2. Create the toggle method
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu state is now:', this.isMenuOpen);
  }
}
