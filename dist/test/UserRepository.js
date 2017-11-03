"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserRepository = /** @class */ (function () {
    function UserRepository() {
        this.repository = [];
    }
    UserRepository.prototype.store = function (user) {
        this.repository.push(user);
    };
    UserRepository.prototype.find = function (name) {
        return this.repository.find(function (user) { return user.getName() === name; });
    };
    UserRepository.prototype.all = function () {
        return this.repository;
    };
    return UserRepository;
}());
exports.UserRepository = UserRepository;
