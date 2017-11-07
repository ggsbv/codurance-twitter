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
var find = require("lodash.find");
var UserRepository = /** @class */ (function (_super) {
    __extends(UserRepository, _super);
    function UserRepository() {
        return _super.call(this) || this;
    }
    UserRepository.prototype.store = function (user) {
        this.db.push(user);
    };
    UserRepository.prototype.find = function (query) {
        return find(this.db, function (user) { return user.name === query.name; });
    };
    UserRepository.prototype.all = function () {
        return this.db;
    };
    return UserRepository;
}(Database_1.Database));
exports.UserRepository = UserRepository;
