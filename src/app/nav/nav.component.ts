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


  title = 'nav'

  }
// document.addEventListener("click", e => {
//   const isDropdownButton = e.target.matches("[data-dropdown-button]")
//   if (!isDropdownButton && e.target.closest("[data-dropdown]") !== null) return
//
//   let currentDropdown
//   if (isDropdownButton){
//     currentDropdown = e.target.closest('[data-dropdown]');
//     currentDropdown.classList.toggle("active");
//   }
//   document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
//     if (dropdown === currentDropdown) return
//     dropdown.classList.remove("active");
//   });
// })
//
document.addEventListener("click", (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const isDropdownButton = target.matches("[data-dropdown-button]");

  if (!isDropdownButton && target.closest("[data-dropdown]") !== null) return;

  let currentDropdown: HTMLElement | null = null;

  if (isDropdownButton) {
    currentDropdown = target.closest("[data-dropdown]");
    currentDropdown?.classList.toggle("active");
  }

  document.querySelectorAll<HTMLElement>("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});


