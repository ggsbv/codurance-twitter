import { UserRepository } from "./UserRepository";
import { User } from "../User";
import { PostRepository } from "./PostRepository";
import { Post } from "./Post";
import { Command } from "./Command";

interface Repository {
    user: UserRepository;
    post: PostRepository;
}

export class Twitter {
    repository: Repository;
    
    constructor(repository: Repository) {
        this.repository = repository;
    }

    handleInput(input: string) {
        let command = new Command(input).interpret();
        
        if (command.type === 'post') {
            let user = this.repository.user.find({ name: command.username });
            
            if (! user) {
                user = new User(command.username);
                this.repository.user.store(user);
            }
            
            this.repository.post.store(user, (new Post({
                text: command.text,
                created_at: new Date(),
            })));
        }
    }
}