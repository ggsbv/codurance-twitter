import { User } from "../User";
import { Database } from "./Database";

import find = require("lodash.find");

export class UserRepository extends Database {
    constructor() {
        super();
    }

    store(user: User) {
        this.db.push(user);
    }

    find(query: Object): User | undefined {
        return find(this.db, (user) => user.name === query.name);
    }

    all(): Array<User> {
        return this.db;
    }
}