"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Command = /** @class */ (function () {
    function Command(input) {
        var input = input.split(" ");
        this.subject = input[0];
        this.verb = input[1];
        this.object = input.slice(2).join(" ");
    }
    Command.prototype.asObject = function () {
        return {
            subject: this.subject,
            verb: this.verb,
            object: this.object
        };
    };
    return Command;
}());
exports.Command = Command;
