import { CommandInterface } from "./CommandInterface";

export class Command {
    protected command: Array<string>;

    constructor(command: string) {
        this.command = command.split(" ");
    }

    interpret(): CommandInterface {
        if (this.command[1] === "->") {
            return {
                type: 'post',
                username: this.command[0],
                verb: this.command[1],
                text: this.command.slice(2).join(" ")
            }
        }
    }
}