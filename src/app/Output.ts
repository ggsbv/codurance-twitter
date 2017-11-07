import { Post } from "./Post";

export class Output {
    constructor() {}

    timeline(posts: Array<Post>): void {
        posts.forEach(post => console.log(`${post.getText()} (${post.getDate().fromNow()})`))
    }

    wall(posts: Array<Post>): void {
        posts.forEach(post => {
            console.log(`${post.getOwner().getName()} - ${post.getText()} (${post.getDate.fromNow()})`)
        })
    }
}