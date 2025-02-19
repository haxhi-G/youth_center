import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { BComponent } from './body/b.component';

const routes: Routes = [
  {
    path:'',
    component: BComponent
  }
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule
  ]
})
export class AppModule { }
