"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../User");
var Twitter = /** @class */ (function () {
    function Twitter(userRepository) {
        this.userRepository = userRepository;
    }
    Twitter.prototype.handleInput = function (command) {
        var userName = command.split(" ")[0];
        if (!this.userRepository.find(userName)) {
            this.userRepository.store(new User_1.User(userName));
        }
    };
    return Twitter;
}());
exports.Twitter = Twitter;
