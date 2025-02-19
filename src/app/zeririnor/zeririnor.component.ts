import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-zeririnor',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './zeririnor.component.html',
  styleUrl: './zeririnor.component.css'
})
export class ZeririnorComponent {
    title = 'zeririnor'
}
