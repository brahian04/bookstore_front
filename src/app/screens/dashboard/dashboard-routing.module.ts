import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component';
import { InventoryComponent } from '../inventory/inventory.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,
  children:[
    {path:'' , redirectTo:'home' ,pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'inventory',component:InventoryComponent},
    {path:'inventory/book-detail/:id', component:BookDetailComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
