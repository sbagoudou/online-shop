import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {MainService} from '../_services/main.service';
import {Router} from '@angular/router';

import {Article} from '../_models/article';
import {UserDetails} from '../_models/userDetails';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    private fullName: string;
    private cardNumber: string;
    private expMonth: string;
    private expYear: string;
    private cvv: string;

    amountToPay: number;

    constructor(private mainService: MainService, private router: Router) {}

    ngOnInit() {
        this.amountToPay = this.mainService.totalPrice;
    }

    /**
     * Action when "Pay" button is pressed
     */
    checkout() {
        if (this.fullName === undefined || this.fullName === null
            || this.cardNumber === null || this.cardNumber === undefined
            || this.expMonth === null || this.expMonth === undefined
            || this.expYear === null || this.expYear === undefined
            || this.cvv === null || this.cvv === undefined) {
            this.mainService.setMsgToast('error', "All fields are required");
        } else {
            this.mainService.setMsgToast('info', "Checking banking informations...");
            console.log(this.fullName + " " + this.cardNumber + " " + this.expMonth + " " + this.expYear + " " + this.cvv);
        }
    }

}
