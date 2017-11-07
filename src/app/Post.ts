import * as moment from "moment";

interface PostInterface {
    text: string;
    created_at: moment;
}

export class Post {
    text: string;
    created_at: moment;

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
}