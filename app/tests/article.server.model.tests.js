const app = require('../../server');
const should = require('should');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const Article = mongoose.model('Article');

let user, article;

describe('Article Model Unit Tests:',()=>{
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
            article = new Article({
                title: 'Article title',
                content: 'Article Content',
                user: user
            });
        });

        done();
    });


    describe('Testing the save method',()=>{
        it('Should be able to save without problems',() => {
            article.save((err)=>{
                should.not.exist(err);
            });
        });

        it('Should not be able to save an article without a title',()=>{
            article.title = '';
            article.save((err)=>{
                should.exist(err);
            });
        });
    });


    afterEach((done)=>{
        Article.remove(()=>{
            User.remove(()=>{
                done();
            });
        });
    });
});