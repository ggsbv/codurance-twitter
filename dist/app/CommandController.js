"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("./User");
var Post_1 = require("./Post");
var moment = require("moment");
var CommandController = /** @class */ (function () {
    function CommandController(repository, output) {
        this.userRepository = repository.forUser;
        this.postRepository = repository.forPost;
        this.output = output;
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
        output.timeline(posts);
    };
    CommandController.prototype.follow = function (command) {
        var user = this.userRepository.find({ name: command.subject });
        var userToFollow = this.userRepository.find({ name: command.object });
        user.follow(userToFollow);
    };
    CommandController.prototype.wall = function (command) {
        var wall = this.userRepository.find({ name: command.subject }).wall();
        output.wall(wall);
    };
    return CommandController;
}());
exports.CommandController = CommandController;
