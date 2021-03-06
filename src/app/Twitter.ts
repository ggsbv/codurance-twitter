import { Command } from "./Command";
import { CommandController } from "./CommandController";
import { RepositoriesInterface } from "./RepositoriesInterface";
import { Output } from "./Output";

export class Twitter {
    protected commandController: CommandController;

    constructor(repository: RepositoriesInterface) {
        this.commandController = new CommandController(repository, new Output());
    }

    handleInput(input: string) {
        let command = new Command(input).asObject();

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
    }
}