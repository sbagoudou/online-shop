import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {MainService} from '../_services/main.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    name: string;
    email: string;
    comment: string;

    constructor(private mainService: MainService) {}

    ngOnInit() {
    }

    contactUs() {
        console.log("name:" + this.name + ";email;" + this.email + ";comment:" + this.comment);


    }

}
