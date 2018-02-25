import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public uiBaseUrl?: string = 'http://localhost:1990/baseurl';
    constructor() {
    }
} 