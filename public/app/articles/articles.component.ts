import {Component} from '@angular/core';
import {ArticlesService} from './article.service';

@Component({
    selector: 'articles',
    template:'<router-outlet></router-outlet>',
    providers: [ArticlesService]
})
export class ArticlesComponent{}