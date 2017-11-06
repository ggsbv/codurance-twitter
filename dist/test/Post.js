"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post(post) {
        this.text = post.text;
        this.created_at = post.date;
    }
    Post.prototype.getText = function () {
        return this.text;
    };
    return Post;
}());
exports.Post = Post;
