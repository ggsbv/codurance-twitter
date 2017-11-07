"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var UserRepository_1 = require("../database/UserRepository");
var PostRepository_1 = require("../database/PostRepository");
var Twitter_1 = require("../app/Twitter");
describe("The twitter application", function () {
    var userRepository = new UserRepository_1.UserRepository();
    var postRepository = new PostRepository_1.PostRepository();
    var twitter = new Twitter_1.Twitter({
        forUser: userRepository,
        forPost: postRepository
    });
    twitter.handleInput("Andre -> Today is a great day!");
    twitter.handleInput("Sandro -> Movies nowadays are just so bad...");
    twitter.handleInput("Sandro -> Not all movies are crap, though. Just sayin.");
    it("should create and store a new User when the user posts for the first time", function () {
        assert.deepEqual(userRepository.all().map(function (user) { return user.getName(); }), ["Andre", "Sandro"]);
    });
    it("should create a new Post and add it to the User Object when the command username is followed by '->' and some text", function () {
        assert.equal(userRepository.find({ name: 'Andre' }).getPosts()[0].getText(), "Today is a great day!");
        var posts = userRepository.find({ name: 'Sandro' }).getPosts()
            .map(function (post) { return post.getText(); });
        assert.deepEqual(posts, [
            "Movies nowadays are just so bad...",
            "Not all movies are crap, though. Just sayin."
        ]);
    });
    it("should add a user to the User class's 'following' list when the command is a username \n    followed by the word 'follow'", function () {
        twitter.handleInput("Charne -> Can't wait for the weekend!");
        twitter.handleInput("Andre follows Charne");
        twitter.handleInput("Andre follows Sandro");
        assert.deepEqual(userRepository.find({ name: "Andre" }).getFollows().map(function (user) { return user.getName(); }), [
            "Charne", "Sandro"
        ]);
    });
    it("should display the user's wall when the input command is a username followed by the word 'wall'", function () {
        // twitter.handleInput("Andre wall");
        // assert.deepEqual()
    });
});
