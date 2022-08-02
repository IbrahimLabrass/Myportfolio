import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    LayoutComponent,
    LoaderComponent,
    NotFoundComponent,
    
    
    

  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
