import { User } from "../User";

export class UserRepository {
    repository: any = [];

    constructor() {}

    store(user: User) {
        this.repository.push(user);
    }

    find(name: string): User {
        return this.repository.find((user: User) => user.getName() === name);
    }

    all(): Array<User> {
        return this.repository;
    }
}