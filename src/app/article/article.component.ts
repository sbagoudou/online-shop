import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MainService} from '../_services/main.service';
import {Article} from '../_models/article';

import {MessageService} from 'primeng/components/common/api';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

    // The reference of the article we are viewing; get from route
    private articleReference: string;

    // List of selected article images to show in the galleria
    imagesArticle: any[];

    constructor(private route: ActivatedRoute, private mainService: MainService, private messageService: MessageService) {}

    /**
     * On component init, get article reference from route and construct the list of images for the galleria
     */
    ngOnInit() {
        this.articleReference = this.route.snapshot.paramMap.get('articleReference');

        this.imagesArticle = [];
        this.imagesArticle.push({source: 'assets/images/' + this.articleReference + '_1.jpg', alt: 'Image 1', title: 'Image 1'});
        this.imagesArticle.push({source: 'assets/images/' + this.articleReference + '_2.jpg', alt: 'Image 1', title: 'Image 1'});
        this.imagesArticle.push({source: 'assets/images/' + this.articleReference + '_3.jpg', alt: 'Image 1', title: 'Image 1'});
    }

    ngDoCheck() {
        // If all data is loaded from data source, find the artticle abject we are viewing by reference
        if (this.mainService.articlesDatasLoaded) {
            for (let i = 0; i < this.mainService.allArticles.length; i++) {
                if (this.mainService.allArticles[i].reference == this.articleReference) {
                    this.mainService.selectedArticle = this.mainService.allArticles[i];
                    break;
                }
            }
            this.mainService.articlesDatasLoaded = false;
        }
    }

    /**
     * Action when add to cart button is pushed;
     * add the article to the list of articles in cart and display a toast message
     */
    addToCart(article: Article) {
        // Get the previous list of articles
        this.mainService.getFromLocal("ARTICLES_IN_CART");
        // Add the new article in the cart
        this.mainService.articlesInCart.push(article);
        // Save the new article list in storage
        this.mainService.saveInLocal("ARTICLES_IN_CART", this.mainService.articlesInCart);

        // message for toast
        let message: string = article.name + ' (' + article.price + '$) has been added to cart'
        this.mainService.setMsgToast('info', message);
    }

}
