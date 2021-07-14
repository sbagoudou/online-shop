import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './main/main.component';
import {AboutComponent} from './about/about.component';
import {CategorieComponent} from './categorie/categorie.component';
import {ArticleComponent} from './article/article.component';
import {CartComponent} from './cart/cart.component';
import {ShippingDetailsComponent} from './shipping-details/shipping-details.component';
import {CheckoutComponent} from './checkout/checkout.component';

const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: 'about', component: AboutComponent},
    {path: 'categorie/:idCategorie', component: CategorieComponent},
    {path: 'article/:articleReference', component: ArticleComponent},
    {path: 'cart', component: CartComponent},
    {path: 'shipping-details', component: ShippingDetailsComponent},
    {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
