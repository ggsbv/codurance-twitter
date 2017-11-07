"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Output = /** @class */ (function () {
    function Output() {
    }
    Output.prototype.timeline = function (posts) {
        posts.forEach(function (post) { return console.log(post.getText() + "(${post.getDate().fromNow()})"); });
    };
    return Output;
}());
exports.Output = Output;
