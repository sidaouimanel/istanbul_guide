import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component'; // Import du composant Home
import { AppRoutingModule } from './app-routing.module';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { FamousPlacesComponent } from './pages/famous-places/famous-places.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProgramsComponent } from './pages/programs/programs.component';
 // Import du module de routage

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    AboutMeComponent,
     RestaurantsComponent,
     SidebarComponent,
     FamousPlacesComponent,
     ContactComponent,
     ProgramsComponent,   // Déclaration de HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Ajout du module de routage
  ],
  providers: [],
  bootstrap: [AppComponent]  // Démarrage du composant principal
})
export class AppModule { }
