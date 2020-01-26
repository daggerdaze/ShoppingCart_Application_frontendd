import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MAIN} from "./app.route";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(MAIN)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
