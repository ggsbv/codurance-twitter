"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flattenDeep = require("lodash.flattendeep");
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.posts = [];
        this.follows = [];
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getPosts = function (sortingOption) {
        if (sortingOption === void 0) { sortingOption = "ascending"; }
        if (sortingOption === "ascending") {
            return this.posts.sort(function (a, b) { return b.getDate().diff(a.getDate()); });
        }
    };
    User.prototype.getFollows = function () {
        return this.follows;
    };
    User.prototype.post = function (post) {
        this.posts.push(post);
    };
    User.prototype.follow = function (user) {
        this.follows.push(user);
    };
    User.prototype.wall = function () {
        return flattenDeep(this.follows.map(function (user) { return user.getPosts(); })
            .concat(this.posts))
            .sort(function (a, b) { return b.getDate().diff(a.getDate()); });
    };
    return User;
}());
exports.User = User;
