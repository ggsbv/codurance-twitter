import { RepositoriesInterface } from "./RepositoriesInterface";
import { PostRepository } from "../database/PostRepository";
import { UserRepository } from "../database/UserRepository";

import { User } from "./User";
import { Post } from "./Post";

import { Output } from "./Output";

import moment = require("moment");

export class CommandController {
    protected userRepository: UserRepository;
    protected postRepository: PostRepository;
    protected output: Output;

    constructor(repository: RepositoriesInterface, output: Output) {
        this.userRepository = repository.forUser;
        this.postRepository = repository.forPost;
        this.output = output;
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
        output.timeline(posts);
    }

    follow(command): void {
        let user = this.userRepository.find({ name: command.subject });
        let userToFollow = this.userRepository.find({ name: command.object });

        user.follow(userToFollow);
    }

    wall(command): void {
        let wall = this.userRepository.find({ name: command.subject }).wall();
        output.wall(wall);
    }
}