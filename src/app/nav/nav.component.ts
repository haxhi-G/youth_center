import { Component , ChangeDetectorRef } from '@angular/core';
import { ZeririnorComponent } from '../zeririnor/zeririnor.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isMenuOpen: boolean = false;
  title = 'nav'

  constructor(private cdr: ChangeDetectorRef) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu state:', this.isMenuOpen);
    this.cdr.detectChanges();
  
  }
  
}

