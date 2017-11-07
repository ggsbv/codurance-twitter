"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Command = /** @class */ (function () {
    function Command(command) {
        this.command = command.split(" ");
    }
    Command.prototype.interpret = function () {
        if (this.command[1] === "->") {
            return {
                type: 'post',
                username: this.command[0],
                verb: this.command[1],
                text: this.command.slice(2).join(" ")
            };
        }
    };
    return Command;
}());
exports.Command = Command;
