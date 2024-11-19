import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { FamousPlacesComponent } from './pages/famous-places/famous-places.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProgramsComponent } from './pages/programs/programs.component';
 // Import du composant Home

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'places', component: FamousPlacesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'programs', component: ProgramsComponent  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
