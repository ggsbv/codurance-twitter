"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var User_1 = require("../User");
var Post_1 = require("../Post");
var moment = require("moment");
describe("The User Class", function () {
    it("getPosts() method should return list of posts in the correct order: from latest to oldest", function () {
        var user = new User_1.User("Sandro");
        user.post(new Post_1.Post({
            text: "What a great start to the day", created_at: moment().subtract(11, 'hours')
        }));
        user.post(new Post_1.Post({
            text: "Goodnight, everyone!", created_at: moment().subtract(10, 'minutes')
        }));
        user.post(new Post_1.Post({
            text: "Evening ends on a good note!", created_at: moment().subtract(3, 'hours')
        }));
        user.post(new Post_1.Post({
            text: "Afternoon isn't going so great anymore", created_at: moment().subtract(6, 'hours')
        }));
        assert.deepEqual(user.getPosts().map(function (post) { return post.getText() + (" (" + post.getDate().fromNow() + ")"); }), [
            "Goodnight, everyone! (10 minutes ago)",
            "Evening ends on a good note! (3 hours ago)",
            "Afternoon isn't going so great anymore (6 hours ago)",
            "What a great start to the day (11 hours ago)"
        ]);
    });
});
