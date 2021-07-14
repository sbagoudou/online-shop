import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StorageServiceModule} from 'angular-webstorage-service';

// PrimeNg modules
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TabMenuModule} from 'primeng/tabmenu';
import {GalleriaModule} from 'primeng/galleria';
import {ToastModule} from 'primeng/toast';


import {MessageService} from 'primeng/components/common/api';

import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {AboutComponent} from './about/about.component';
import {CategorieComponent} from './categorie/categorie.component';
import {ArticleComponent} from './article/article.component';
import {CartComponent} from './cart/cart.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        AboutComponent,
        CategorieComponent,
        ArticleComponent,
        CartComponent,
        ShippingDetailsComponent,
        CheckoutComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        StorageServiceModule,
        ButtonModule,
        MessagesModule,
        TabMenuModule,
        MessageModule,
        GalleriaModule,
        ToastModule
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {}
