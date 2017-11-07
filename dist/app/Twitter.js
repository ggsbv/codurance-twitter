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
        switch (command.verb) {
            case "->":
                this.commandController.post(command);
                break;
            case "follows":
                this.commandController.follow(command);
                break;
            case "wall":
                this.commandController.wall(command);
                break;
            default:
                this.commandController.read(command);
        }
    };
    return Twitter;
}());
exports.Twitter = Twitter;
