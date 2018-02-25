import { Component } from '@angular/core';
import { homepageService } from './homepage.service';

@Component({
    selector: 'home-page',
    providers: [homepageService],
    templateUrl: 'homePage.component.html',
    styleUrls: ['./homePage.component.css']
})
export class HomePageComponent {

    public data: string = '';
    countries: any;
    constructor(public _homepageService: homepageService) {
        this.countries = [];
    }

    getCountriesByRegion(region: any) {
        if (region) {
            this._homepageService.getCountriesByRegion(region).subscribe(data => {
                this.countries = data;
                this.data = '';
            });
        } else {
            alert('Please give us, atleast 1 input');
        }
    }
}