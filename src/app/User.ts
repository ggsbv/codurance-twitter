import { Post } from "./Post";
import flattenDeep = require("lodash.flattendeep");

export class User {
    name: string;
    posts: Array<Post>;
    follows: Array<User>;

    constructor(name: string) {
        this.name = name;
        this.posts = [];
        this.follows = [];
    }

    getName() {
        return this.name;
    }

    getPosts(sortingOption: string = "ascending") {
        if (sortingOption === "ascending") {
            return this.posts.sort((a, b) => b.getDate().diff(a.getDate()));
        }
    }

    getFollows() {
        return this.follows;
    }

    post(post: Post) {
        this.posts.push(post);
    }

    follow(user: User) {
        this.follows.push(user);
    }

    wall() {
        return flattenDeep(this.follows.map(user => user.getPosts())
            .concat(this.posts))
            .sort((a, b) => b.getDate().diff(a.getDate()));
    }
}
