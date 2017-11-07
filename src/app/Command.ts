import { CommandInterface } from "./CommandInterface";

export class Command {
    protected subject: string;
    protected verb: string | undefined;
    protected object: string | undefined;

    constructor(input: string) {
        let input = input.split(" ");
        this.subject = input[0];
        this.verb = input[1];
        this.object = input.slice(2).join(" ");
    }

    asObject() {
        return {
            subject: this.subject,
            verb: this.verb,
            object: this.object
        }
    }
}