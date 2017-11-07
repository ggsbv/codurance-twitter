"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Output = /** @class */ (function () {
    function Output() {
    }
    Output.prototype.timeline = function (user) {
        var posts = user.posts().map(function (post) { return post.getText(); });
        posts.sort(function (a, b) { return a.getDate() - b.getDate(); })
            .forEach(function (post) { return console.log(post.getText() + "(${post.getDate()})"); });
    };
    return Output;
}());
exports.Output = Output;
