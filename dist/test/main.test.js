"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var UserRepository_1 = require("./UserRepository");
var Twitter_1 = require("./Twitter");
var PostRepository_1 = require("./PostRepository");
describe("The twitter application", function () {
    it("should create and store a new User when the user posts for the first time", function () {
        var userRepository = new UserRepository_1.UserRepository();
        var postRepository = new PostRepository_1.PostRepository();
        var twitter = new Twitter_1.Twitter({
            user: userRepository,
            post: postRepository
        });
        twitter.handleInput("Andre -> Today is a great day!");
        twitter.handleInput("Sandro -> Movies nowadays are just so bad...");
        twitter.handleInput("Sandro -> Not all movies are crap, though. Just sayin'.");
        assert.equal(userRepository.all().length, 2);
        assert.equal(userRepository.all()[0].getName(), "Andre");
        assert.equal(userRepository.all()[1].getName(), "Sandro");
    });
    // it("should create a new Post and add it to the User Object when the command user getName is followed by '->' and some text",
    //     () => {
    //         let twitter = new Twitter();
    //         let userRepository = new UserRepository();
    //
    //         twitter.handleInput("Andre -> Today is a great day!");
    //
    //         assert.equal(userRepository.find({ getName: 'Andre' }).posts()[0].text(), "Today is a great day!");
    //     })
});
