"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var User_1 = require("../User");
var Post_1 = require("../Post");
var moment = require("moment");
var PostRepository_1 = require("../../database/PostRepository");
describe("The User Class", function () {
    var postRepository = new PostRepository_1.PostRepository();
    var user = new User_1.User("Sandro");
    postRepository.store(user, new Post_1.Post({
        text: "What a great start to the day", created_at: moment().subtract(11, 'hours')
    }));
    postRepository.store(user, new Post_1.Post({
        text: "Goodnight, everyone!", created_at: moment().subtract(10, 'minutes')
    }));
    postRepository.store(user, new Post_1.Post({
        text: "Evening ends on a good note!", created_at: moment().subtract(3, 'hours')
    }));
    postRepository.store(user, new Post_1.Post({
        text: "Afternoon isn't going so great anymore", created_at: moment().subtract(6, 'hours')
    }));
    var user2 = new User_1.User("Andre");
    postRepository.store(user2, new Post_1.Post({ text: "Screw this!", created_at: moment().subtract(5, 'hours') }));
    user2.follow(user);
    var user3 = new User_1.User("Charne");
    postRepository.store(user3, new Post_1.Post({ text: "I love everyone!", created_at: moment().subtract(9, 'minutes') }));
    user2.follow(user3);
    it("should return list of posts in the correct order: from latest to oldest", function () {
        assert.deepEqual(user.getPosts().map(function (post) { return post.getText() + (" (" + post.getDate().fromNow() + ")"); }), [
            "Goodnight, everyone! (10 minutes ago)",
            "Evening ends on a good note! (3 hours ago)",
            "Afternoon isn't going so great anymore (6 hours ago)",
            "What a great start to the day (11 hours ago)"
        ]);
    });
    it("should return posts on the user's wall in the correct order: from latest to oldest", function () {
        assert.deepEqual(user2.wall().map(function (post) {
            return post.getOwner().getName() + " - " + post.getText() + " (" + post.getDate().fromNow() + ")";
        }), [
            "Charne - I love everyone! (9 minutes ago)",
            "Sandro - Goodnight, everyone! (10 minutes ago)",
            "Sandro - Evening ends on a good note! (3 hours ago)",
            "Andre - Screw this! (5 hours ago)",
            "Sandro - Afternoon isn't going so great anymore (6 hours ago)",
            "Sandro - What a great start to the day (11 hours ago)"
        ]);
    });
});
