interface PostInterface {
    text: string;
    created_at: Date;
}

export class Post {
    text: string;
    created_at: Date;

    constructor(post: PostInterface) {
        this.text = post.text;
        this.created_at = post.date;
    }

    getText() {
        return this.text;
    }
}