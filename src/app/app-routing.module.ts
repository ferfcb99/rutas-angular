import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './dashboard/create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReadComponent } from './dashboard/read/read.component';
import { UpdateComponent } from './dashboard/update/update.component';

// localhost:4200/create
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'create', component: CreateComponent, children: [
      {
        path: 'read', component: ReadComponent
      }, 
      {
        path: 'update', component: UpdateComponent
      }
    ]
  },
  { path: 'read', component: ReadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
