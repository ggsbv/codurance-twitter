import { RepositoriesInterface } from "./RepositoriesInterface";

import { User } from "./User";
import { Post } from "./Post";
import { Output } from "./Output";

import moment = require("moment");

export class CommandController {
    protected userRepository;
    protected postRepository;

    constructor(repository: RepositoriesInterface) {
        this.userRepository = repository.forUser;
        this.postRepository = repository.forPost;
    }

    post(command): void {
        let user = this.userRepository.find({ name: command.subject });

        if (! user) {
            user = new User(command.subject);
            this.userRepository.store(user);
        }

        this.postRepository.store(user, (new Post({ text: command.object, created_at: moment() })));
    }

    read(command): void {
        let posts = this.userRepository.find({ name: command.subject }).getPosts();
        new Output(posts).timeline();
    }

    follow(command): void {
        let user = this.userRepository.find({ name: command.subject });
        let userToFollow = this.userRepository.find({ name: command.object });

        user.follow(userToFollow);
    }
}