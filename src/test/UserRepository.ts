import { User } from "../User";
import { Database } from "./Database";

import * as find from "lodash.find";

export class UserRepository extends Database {
    constructor() {
        super();
    }

    store(user: User) {
        this.db.push(user);
    }

    find(query: Object): User {
        return find(this.db, (user) => user.name === query.name);
    }

    all(): Array<User> {
        return this.db;
    }
}