
//Library Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular2-toaster';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

//Application Modules
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomePageComponent } from './homePage/homePage.component';

//Providers
import { Configuration } from '../configuration/configuration';
import { homepageService } from './homePage/homepage.service';


@NgModule({
    imports: [
        BrowserModule, RouterModule, routing, FormsModule, BrowserAnimationsModule, ToasterModule, NgbModule, HttpModule, HttpClientModule
    ],
    declarations: [AppComponent, HomePageComponent],
    providers: [Configuration, homepageService],
    bootstrap: [AppComponent]
})
export class AppModule { } 
