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
    User.prototype.getPosts = function (sortingOption) {
        if (sortingOption === void 0) { sortingOption = "ascending"; }
        if (sortingOption === "ascending") {
            return this.posts.sort(function (a, b) { return b.getDate().diff(a.getDate()); });
        }
    };
    User.prototype.post = function (post) {
        this.posts.push(post);
    };
    return User;
}());
exports.User = User;
