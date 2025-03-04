import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import {RouterModule, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-zeririnor',
  standalone: true,
  imports: [  RouterModule ,RouterOutlet],
  templateUrl: './zeririnor.component.html',
  styleUrl: './zeririnor.component.css'
})
export class ZeririnorComponent {
    title = 'zeririnor';
}
