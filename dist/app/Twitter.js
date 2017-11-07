"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Command_1 = require("./Command");
var CommandController_1 = require("./CommandController");
var Twitter = /** @class */ (function () {
    function Twitter(repository) {
        this.commandController = new CommandController_1.CommandController(repository);
    }
    Twitter.prototype.handleInput = function (input) {
        var command = new Command_1.Command(input).asObject();
        if (!command.verb) {
            this.commandController.read(command);
        }
        if (command.verb === "->") {
            this.commandController.post(command);
        }
        if (command.verb === "follows") {
            this.commandController.follow(command);
        }
        if (command.verb === "wall") {
            this.commandController.wall(command);
        }
    };
    return Twitter;
}());
exports.Twitter = Twitter;
