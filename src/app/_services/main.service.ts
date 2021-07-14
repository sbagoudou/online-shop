import {Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {MessageService} from 'primeng/components/common/api';

import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

import {Article} from '../_models/article';
import {UserDetails} from '../_models/userDetails';

@Injectable({
    providedIn: 'root'
})
export class MainService {

    constructor(private router: Router, private messageService: MessageService, private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {}

    // data from local storage
    public data: any = []

    // Articles in cart
    articlesInCart: Article[] = [];

    // The total price of articlesin cart
    totalPrice: number = 0;

    // Informations of userabout to checkout
    userDetails: UserDetails;

    // All articles from database
    allArticles: Article[] = [];

    // Articles that will be in featured section
    featuredArticles: Article[] = [];

    // The selected article for article details
    selectedArticle: Article;

    // Tell if all articles datas have been loaded from DB
    articlesDatasLoaded: boolean = false;

    /**
     * Adds a toast message to GUI
     */
    setMsgToast(severity: string, message: string) {
        this.messageService.add({severity: severity, detail: message});
    }

    /**
     * Link of file with all articles informations
     */
    public getJSONArticles(): Observable<any> {
        return this.http.get("/assets/jsonfiles/articles.json");
    }

    /**
     * Retreaves all articles informations, transform them to Article object and add them to the list of all articles
     * Also adds articles to the list of featured articles
     */
    public getAllArticles() {
        this.getJSONArticles().subscribe(data => {
            this.allArticles = [];

            let arrayArticles = data as string[];

            for (let i = 0; i < arrayArticles.length; i++) {
                var article: Article = new Article;
                article.reference = arrayArticles[i].reference;
                article.name = arrayArticles[i].name;
                article.category = arrayArticles[i].category;
                article.price = arrayArticles[i].price;
                article.featured = arrayArticles[i].featured;
                article.description = arrayArticles[i].description;
                this.allArticles.push(article);

                if (article.featured === "Y") {
                    this.featuredArticles.push(article);
                }
            }
            this.articlesDatasLoaded = true;
        });
    }

    /**
     * Action done when a article is selected whereever you are in the application
     */
    onArticleSelected(article: Article): void {
        this.selectedArticle = article;
        this.router.navigate(['/article/' + article.reference]);
    }

    /**
     * add data in local storage and in class level scope array
     */
    saveInLocal(key, val): void {
        this.storage.set(key, val);
        this.data[key] = this.storage.get(key);

        // Store data in variable
        this.articlesInCart = this.data["ARTICLES_IN_CART"];
    }

    /**
     * Get specific data from local storage by key
     */
    getFromLocal(key): void {
        this.data[key] = this.storage.get(key);

        // If no key stored, init the list
        if (this.data[key] == null) {
            this.saveInLocal(key, []);
        }

        // Store data in variable
        this.articlesInCart = this.data["ARTICLES_IN_CART"];
    }
}
