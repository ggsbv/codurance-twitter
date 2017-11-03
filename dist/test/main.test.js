"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var UserRepository_1 = require("./UserRepository");
var Twitter_1 = require("./Twitter");
describe("The twitter application", function () {
    it("should create and store a new User when the user posts for the first time", function () {
        var repository = new UserRepository_1.UserRepository();
        var twitter = new Twitter_1.Twitter(repository);
        twitter.handleInput("Andre Today is a great day!");
        twitter.handleInput("Sandro Movies nowadays are just so bad...");
        twitter.handleInput("Sandro Not all movies are crap, though. Just sayin'.");
        assert.equal(repository.all().length, 2);
        assert.equal(repository.all()[0].getName(), "Andre");
        assert.equal(repository.all()[1].getName(), "Sandro");
    });
});
