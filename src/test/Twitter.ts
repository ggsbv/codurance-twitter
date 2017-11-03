import { UserRepository } from "./UserRepository";
import { User } from "../User";

export class Twitter {
    userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    handleInput(command: string) {
        let userName = command.split(" ")[0];

        if (! this.userRepository.find(userName)) {
            this.userRepository.store(new User(userName));
        }
    }
}