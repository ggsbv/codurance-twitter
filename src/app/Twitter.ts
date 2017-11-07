import { UserRepository } from "../database/UserRepository";
import { User } from "./User";
import { PostRepository } from "../database/PostRepository";
import { Post } from "./Post";
import { Command } from "./Command";
import { Output } from "./Output";

import * as moment from "moment";

interface RepositoryInterface {
    forUser: UserRepository;
    forPost: PostRepository;
}

export class Twitter {
    protected userRepository: UserRepository;
    protected postRepository: PostRepository;

    constructor(repository: RepositoryInterface) {
        this.userRepository = repository.forUser;
        this.postRepository = repository.forPost;
    }

    handleInput(input: string) {
        let command = new Command(input).interpret();
        
        if (command.type === 'post') {
            let user = this.userRepository.find({ name: command.username });
            
            if (! user) {
                user = new User(command.username);
                this.userRepository.store(user);
            }
            
            this.postRepository.store(user, (new Post({ text: command.text, created_at: moment() })));
        }

        if (command.type === 'read') {

            let posts = this.userRepository.find({ name: command.username }).getPosts();
            new Output(posts).timeline();

        }
    }
}