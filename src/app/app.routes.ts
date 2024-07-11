// import {NgModule} from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SellAuthComponent} from "./sell-auth/sell-auth.component";
import {NgModule} from "@angular/core";

const routes: Routes = [{
  path:'',
  component:HomeComponent
},
  {
    path:'sell-auth',
    component:SellAuthComponent
  }]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutes{}
