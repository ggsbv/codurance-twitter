"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Post_1 = require("./Post");
var Output_1 = require("./Output");
var moment = require("moment");
var CommandController = /** @class */ (function () {
    function CommandController(repository) {
        this.userRepository = repository.forUser;
        this.postRepository = repository.forPost;
    }
    CommandController.prototype.post = function (command) {
        var user = this.userRepository.find({ name: command.subject });
        if (!user) {
            user = new User_1.User(command.subject);
            this.userRepository.store(user);
        }
        this.postRepository.store(user, (new Post_1.Post({ text: command.object, created_at: moment() })));
    };
    CommandController.prototype.read = function (command) {
        var posts = this.userRepository.find({ name: command.subject }).getPosts();
        new Output_1.Output(posts).timeline();
    };
    CommandController.prototype.follow = function (command) {
        var user = this.userRepository.find({ name: command.subject });
        var userToFollow = this.userRepository.find({ name: command.object });
        user.follow(userToFollow);
    };
    return CommandController;
}());
exports.CommandController = CommandController;
