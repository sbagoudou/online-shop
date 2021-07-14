import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {MainService} from '../_services/main.service';
import {Router} from '@angular/router';

import {Article} from '../_models/article';
import {UserDetails} from '../_models/userDetails';

@Component({
    selector: 'app-shipping-details',
    templateUrl: './shipping-details.component.html',
    styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {

    constructor(private mainService: MainService, private router: Router) {
        this.mainService.userDetails = new UserDetails();
    }

    ngOnInit() {
    }

    updateUserDetails(form: NgForm) {
        const data = form.value;

        console.log(data);
        console.log(this.mainService.userDetails);
        this.router.navigate(['/checkout']);
    }

}
