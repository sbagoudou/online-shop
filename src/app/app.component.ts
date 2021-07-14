import {Component, OnInit} from '@angular/core';

import {Article} from './_models/article';

import {MainService} from './_services/main.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    numberArticlesInCart: number = 0;
    constructor(private mainService: MainService) {}

    ngOnInit() {
        this.mainService.getAllArticles();

        // Get articles in cart stored in local
        this.mainService.getFromLocal("ARTICLES_IN_CART");
    }

    ngDoCheck() {
        // Calculates everytime the total number of articles in cart
        if (this.mainService.articlesInCart != null && this.mainService.articlesInCart != undefined) {
            this.numberArticlesInCart = this.mainService.articlesInCart.length;
        }

        // Calculates everytime the total price of articles in cart
        if (this.mainService.articlesInCart != null && this.mainService.articlesInCart != undefined && this.mainService.articlesInCart.length > 0) {
            var total = 0;
            this.mainService.articlesInCart.forEach((article: Article) => {
                total += +article.price;
            });
            this.mainService.totalPrice = total;
        }
    }
}
