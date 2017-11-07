import { Database } from "./Database";
import { Post } from "../app/Post";
import { User } from "../app/User";

export class PostRepository extends Database {
    constructor() {
        super();
    }

    store(user: User, post: Post) {
        user.post(post);
    }
}