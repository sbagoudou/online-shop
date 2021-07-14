import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Article} from '../_models/article';
import {MainService} from '../_services/main.service';

@Component({
    selector: 'app-categorie',
    templateUrl: './categorie.component.html',
    styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

    private categorie: string;

    constructor(private route: ActivatedRoute, private router: Router, private mainService: MainService) {}

    ngOnInit() {
        this.mainService.selectedArticle = null;
    }

    ngDoCheck() {
        // Intercepts every route changes and set the result to categorie parameter
        this.categorie = this.route.snapshot.paramMap.get('idCategorie');
    }

}
