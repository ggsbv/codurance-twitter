import { Database } from "./Database";
import { Post } from "./Post";
import { User } from "../User";

export class PostRepository extends Database {
    constructor() {
        super();
    }

    store(user: User, post: Post) {
        user.post(post);
    }
}