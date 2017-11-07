import { UserRepository } from "../database/UserRepository";
import { PostRepository } from "../database/PostRepository";

export interface RepositoriesInterface {
    forUser: UserRepository;
    forPost: PostRepository;
}