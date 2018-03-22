import {Observable} from 'rxjs/Rx';
import {Directive, Input} from '@angular/core';
import {ComponentFixture, TestBed, async, fakeAsync} from '@angular/core/testing';
import {ArticlesService} from '../article.service';
import {ListComponent} from './list.component';

class MockArticlesService{
    articles = [{
        _id: '12345678',
        title:'An Article about Mean',
        content: 'MEAN rocks!',
        created: new Date(),
        creator:{
            fullName: 'John Doe'
        }
    }];

    public list(){
        return Observable.of(this.articles);
    }
}

@Directive({
    selector:'[routerLink]',
    host:{
        '(click)':'onClick()'
    }
})
export class RouterLinkStubDirective{
    @Input('routerLink') linkParams: any;
    navigatedTo: any = null;

    onClick(){
        this.navigatedTo = this.linkParams;
    }
}

describe('List component tests',()=>{
    let componentFixture: ComponentFixture<ListComponent>;
    
    beforeEach(async(()=>{
        TestBed.configureTestingModule({
            declarations:[ListComponent,RouterLinkStubDirective],
            providers: [{providers: ArticlesService, useClass: MockArticlesService}]
        }).compileComponents();
    }));

    beforeEach(fakeAsync(()=>{
        componentFixture = TestBed.createComponent(ListComponent);
    }));

    it('Should Render list',()=>{
        console.dir(componentFixture);
        componentFixture.detectChanges();
        const mockArticlesService = new MockArticlesService();
        const listComponentElement = componentFixture.nativeElement;
        const articleElements = listComponentElement.querySelectorAll('li');
        const articleElement = articleElements[0];
        const articleTitleElement = articleElement.querySelector('a');
        const articleContentElement = articleElement.querySelector('p');

        const mockArticleList = mockArticlesService.articles;
        const mockArticle = mockArticleList[0];
        const mockArticleTitle = mockArticle.title;
        const mockArticleContent = mockArticle.content;

        expect(articleElements.length)
            .toBe(mockArticleList.length);

        expect(articleTitleElement.innerHTML)
            .toBe(mockArticleTitle);
        
        expect(articleContentElement.innerHTML)
            .toBe(mockArticleContent);
    })

});
