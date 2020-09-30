import { ShopComponent } from './layout/shop/shop.component';
import { ContactComponent } from './layout/contact/contact.component';
import { ClassesComponent } from './layout/classes/classes.component';
import { AboutComponent } from './layout/about/about.component';
import { PathNotFoundComponent } from './core/path-not-found/path-not-found.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';





const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { animation: 'isRight' } },
  { path: 'about', component: AboutComponent, data: { animation: 'isLeft' } },
  { path: 'classes', component: ClassesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'shop', component: ShopComponent },
  { path: '', pathMatch: 'full', redirectTo: '/about' },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
