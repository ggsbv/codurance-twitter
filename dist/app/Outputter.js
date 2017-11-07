"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Outputter = /** @class */ (function () {
    function Outputter() {
    }
    Outputter.prototype.timeline = function (posts) {
        posts.forEach(function (post) { return console.log(post.getText() + ("(" + post.getDate().fromNow() + ")")); });
    };
    Outputter.prototype.wall = function () {
    };
    return Outputter;
}());
exports.Outputter = Outputter;
