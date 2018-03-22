const app = require('../../server');
const request = require('supertest');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Article = mongoose.model('Article');

let user, article;

describe('Articles Controller Unit Tests',(done)=>{
    beforeEach((done)=>{
        user = new User({
            firstName:'Full',
            lastName: 'Name',
            displayName: 'FullName',
            email:'test@test.com',
            username:'username',
            password:'password'            
        });

        user.save(()=>{
    
        });

        article = new Article({
            title: 'Article title',
            content: 'Article Content',
            user: user
        }); 
    
        article.save((err)=>{
            done();
        });
    });


    describe('Testing the GET methods',()=>{
        it('Should be able to get the list of articles',(done)=>{
            request(app).get('/api/articles')
                .set('Accept','application/json')
                .expect('Content-Type',/json/)
                .expect(200)
                .end((err,res)=>{
                    res.body.should.be.an.Array().and.have.lengthOf(1);
                    res.body[0].should.have.property('title',article.title);
                    res.body[0].should.have.property('content',article.content);
                    done();
                });
        });

        it('Should be able to get the specific article',(done)=>{
            request(app).get('/api/articles/' + article.id)
                .set('Accept','application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err,res)=>{
                    res.body.should.be.an.Object().and.have.property('title', article.title);
                    res.body.should.have.property('content',article.content);
                    done();
                });
        });

        afterEach((done)=>{
            Article.remove().exec();
            User.remove().exec();
            done();
        });
    });
});
