// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Routes } from '@angular/router';
// import { BComponent } from './body/b.component';
// import {ZeririnorComponent} from "./zeririnor/zeririnor.component";
//
// const routes: Routes = [
//   {
//     path:'nav',
//     component: BComponent
//
//   },
//   {
//     path: 'zeririnor',
//     component: ZeririnorComponent
//   },
//
// ]
//
// @NgModule({
//   declarations: [
//
//   ],
//   imports: [
//     CommonModule
//
//   ]
// })
// export class AppModule { }

// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BComponent } from './body/b.component';
import { ZeririnorComponent } from './zeririnor/zeririnor.component';

const routes: Routes = [
  { path: '',
    component: BComponent
  },
  { path: 'zeririnor',
    component: ZeririnorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
