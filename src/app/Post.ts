import * as moment from "moment";
import { User } from "./User";

interface PostInterface {
    text: string;
    created_at: moment;
}

export class Post {
    text: string;
    created_at: moment;
    owner: User;

    constructor(post: PostInterface) {
        this.text = post.text;
        this.created_at = post.created_at;
    }

    getText(): string {
        return this.text;
    }

    getDate(): moment {
        return this.created_at;
    }

    ownedBy(user: User) {
        this.owner = user;
    }

    getOwner(): User {
        return this.owner;
    }
}