import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {MainService} from '../_services/main.service';

import {Article} from '../_models/article';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    constructor(private mainService: MainService, private router: Router) {}

    ngOnInit() {
    }
}
