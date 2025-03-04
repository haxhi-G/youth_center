import { Routes } from '@angular/router';
import { BComponent } from './body/b.component';
import { ZeririnorComponent } from './zeririnor/zeririnor.component';

export const routes: Routes = [
  {
    path: '',
    component: BComponent
  },
  {
    path: 'zeririnor',
    component: ZeririnorComponent
  },

];
