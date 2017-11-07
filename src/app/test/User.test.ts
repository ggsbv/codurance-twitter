import assert = require("assert");
import { User } from "../User";
import { Post } from "../Post";
import * as moment from "moment";

describe("The User Class", () => {
   it("getPosts() method should return list of posts in the correct order: from latest to oldest", () => {
       let user = new User("Sandro");

       user.post(new Post({
           text: "What a great start to the day", created_at: moment().subtract(11, 'hours')
       }));
       user.post(new Post({
           text: "Goodnight, everyone!", created_at: moment().subtract(10, 'minutes')
       }));
       user.post(new Post({
           text: "Evening ends on a good note!", created_at: moment().subtract(3, 'hours')
       }));
       user.post(new Post({
           text: "Afternoon isn't going so great anymore", created_at: moment().subtract(6, 'hours')
       }));


       assert.deepEqual(user.getPosts().map(post => post.getText() + ` (${post.getDate().fromNow()})`), [
           "Goodnight, everyone! (10 minutes ago)",
           "Evening ends on a good note! (3 hours ago)",
           "Afternoon isn't going so great anymore (6 hours ago)",
           "What a great start to the day (11 hours ago)"
       ])
   })
});