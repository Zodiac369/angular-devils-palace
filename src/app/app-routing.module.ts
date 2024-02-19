import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TopComponent } from './top/top.component';
import { GenresComponent } from './genres/genres.component';
import { ProfilComponent } from './profil/profil.component';
import { SocialComponent } from './social/social.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '', redirectTo:'home', pathMatch:'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'films', component: ProductsComponent
  },
  {
    path: 'top', component: TopComponent
  },
  {
    path: 'genres', component: GenresComponent
  },
  {
    path: 'profil', component: ProfilComponent
  },
  {
    path: 'social', component: SocialComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
