import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '', redirectTo:'dashboard', pathMatch:'full'
  },
  {
    path: 'home', component: DashboardComponent
  },
  {
    path: 'films', component: ProductsComponent
  },
  {
    path: 'top', component: StatisticsComponent
  },
  {
    path: 'genres', component: CoupensComponent
  },
  {
    path: 'profil', component: PagesComponent
  },
  {
    path: 'media', component: MediaComponent
  },
  {
    path: 'contact', component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
