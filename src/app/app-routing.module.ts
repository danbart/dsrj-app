import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiscaliaComponent } from './pages/fiscalia/fiscalia.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fiscalia/:id', component: FiscaliaComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
