import { Component , ChangeDetectorRef } from '@angular/core';
import { ZeririnorComponent } from '../zeririnor/zeririnor.component';
import {RouterModule, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {
  title = 'nav'


   protected readonly ZeririnorComponent = ZeririnorComponent;
}

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


