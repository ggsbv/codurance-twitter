import { Post } from "./Post";

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

    getPosts(sortingOption: string = "ascending") {
        if (sortingOption === "ascending") {
            return this.posts.sort((a, b) => b.getDate().diff(a.getDate()));
        }
    }

    post(post: Post) {
        this.posts.push(post);
    }
}
