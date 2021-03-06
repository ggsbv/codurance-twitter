"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post(post) {
        this.text = post.text;
        this.created_at = post.created_at;
    }
    Post.prototype.getText = function () {
        return this.text;
    };
    Post.prototype.getDate = function () {
        return this.created_at;
    };
    Post.prototype.ownedBy = function (user) {
        this.owner = user;
    };
    Post.prototype.getOwner = function () {
        return this.owner;
    };
    return Post;
}());
exports.Post = Post;
