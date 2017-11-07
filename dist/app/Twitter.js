"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Post_1 = require("./Post");
var Command_1 = require("./Command");
var Output_1 = require("./Output");
var moment = require("moment");
var Twitter = /** @class */ (function () {
    function Twitter(repository) {
        this.userRepository = repository.forUser;
        this.postRepository = repository.forPost;
    }
    Twitter.prototype.handleInput = function (input) {
        var command = new Command_1.Command(input).interpret();
        if (command.type === 'post') {
            var user = this.userRepository.find({ name: command.username });
            if (!user) {
                user = new User_1.User(command.username);
                this.userRepository.store(user);
            }
            this.postRepository.store(user, (new Post_1.Post({ text: command.text, created_at: moment() })));
        }
        if (command.type === 'read') {
            var posts = this.userRepository.find({ name: command.username }).getPosts();
            new Output_1.Output(posts).timeline();
        }
    };
    return Twitter;
}());
exports.Twitter = Twitter;
