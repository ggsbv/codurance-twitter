import { Command } from "./Command";
import { CommandController } from "./CommandController";
import { RepositoriesInterface } from "./RepositoriesInterface";

export class Twitter {
    protected commandController: CommandController;

    constructor(repository: RepositoriesInterface) {
        this.commandController = new CommandController(repository);
    }

    handleInput(input: string) {
        let command = new Command(input).asObject();

        if (! command.verb) {
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
    }
}