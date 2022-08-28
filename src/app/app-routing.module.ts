import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkComponent } from './pages/link/link.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'linkme', component: LinkComponent },
  { path: 'Home', component: HomeComponent },
  { path: '**', redirectTo: 'linkme', pathMatch: 'full' },
  { path: '', redirectTo: 'linkme', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
