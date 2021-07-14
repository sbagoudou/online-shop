import {Component, OnInit} from '@angular/core';

import {MainService} from '../_services/main.service';
import {Router} from '@angular/router';
import {Article} from '../_models/article';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    constructor(private mainService: MainService, private router: Router) {}

    ngOnInit() {
    }



    validateCart() {
        this.router.navigate(['/shipping-details']);
    }

    /**
     * Action when delete article button is clicked from cart articles;
     * Removes the article from cart articles list
     */
    removeArticle(articleReference: string) {
        var articleToRemove: Article;
        for (let _i = 0; _i < this.mainService.articlesInCart.length; _i++) {
            var article: Article = this.mainService.articlesInCart[_i];
            if (article.reference == articleReference) {
                articleToRemove = article;
                break;
            }
        }
        const index: number = this.mainService.articlesInCart.indexOf(articleToRemove);
        if (index !== -1) {
            this.mainService.articlesInCart.splice(index, 1);
        }

        // Save the new article list in storage
        this.mainService.saveInLocal("ARTICLES_IN_CART", this.mainService.articlesInCart);
    }

}
