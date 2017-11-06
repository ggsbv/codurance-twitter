import { Post } from "./test/Post";

export class User {
    name: string;
    posts: Array<Post>;

    constructor(name: string) {
        this.name = name;
        this.posts = [];
    }

    getName() {
        return this.name;
    }

    getPosts() {
        return this.posts;
    }

    post(post: Post) {
        this.posts.push(post);
    }
}
