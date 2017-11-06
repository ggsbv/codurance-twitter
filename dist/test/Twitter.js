"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../User");
var Post_1 = require("./Post");
var Command_1 = require("./Command");
var Twitter = /** @class */ (function () {
    function Twitter(repository) {
        this.repository = repository;
    }
    Twitter.prototype.handleInput = function (input) {
        var command = new Command_1.Command(input).interpret();
        if (command.type === 'post') {
            var user = this.repository.user.find({ name: command.username });
            if (!user) {
                user = new User_1.User(command.username);
                this.repository.user.store(user);
            }
            this.repository.post.store(user, (new Post_1.Post({
                text: command.text,
                created_at: new Date(),
            })));
        }
    };
    return Twitter;
}());
exports.Twitter = Twitter;
