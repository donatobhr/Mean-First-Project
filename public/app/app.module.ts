import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routes';

import {HomeModule} from './home/home.module';
import {AuthenticationService} from './authentication/authentication.service';
import {AuthenticationModule} from './authentication/authentication.module';
import {ArticlesModule} from './articles/articles.module';
import {ChatModule} from './chat/chat.module';

@NgModule({
    imports:[
        BrowserModule,
        HttpModule,
        AuthenticationModule,
        FormsModule,
        HomeModule,
        ArticlesModule,
        ChatModule,
        RouterModule.forRoot(AppRoutes)
    ],
    declarations:[
        AppComponent
    ],
    providers:[
        AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}
