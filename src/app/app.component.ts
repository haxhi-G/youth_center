import { ZeririnorComponent } from './zeririnor/zeririnor.component';
import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { BComponent } from "./body/b.component";
import { FComponent } from "./footeer/f.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, BComponent, FComponent ,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'websiteyouthcenter';
}
