"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.posts = [];
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getPosts = function () {
        return this.posts;
    };
    User.prototype.post = function (post) {
        this.posts.push(post);
    };
    return User;
}());
exports.User = User;
