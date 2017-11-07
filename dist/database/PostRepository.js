"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Database_1 = require("./Database");
var PostRepository = /** @class */ (function (_super) {
    __extends(PostRepository, _super);
    function PostRepository() {
        return _super.call(this) || this;
    }
    PostRepository.prototype.store = function (user, post) {
        user.post(post);
    };
    return PostRepository;
}(Database_1.Database));
exports.PostRepository = PostRepository;
