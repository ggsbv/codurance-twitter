import assert = require("assert");

import { UserRepository } from "../database/UserRepository";
import { PostRepository } from "../database/PostRepository";
import { Twitter } from "../app/Twitter";

describe("The twitter application", () => {
    let userRepository = new UserRepository();
    let postRepository = new PostRepository();

    let twitter = new Twitter({
        forUser: userRepository,
        forPost: postRepository
    });

    twitter.handleInput("Andre -> Today is a great day!");
    twitter.handleInput("Sandro -> Movies nowadays are just so bad...");
    twitter.handleInput("Sandro -> Not all movies are crap, though. Just sayin.");

    it("should create and store a new User when the user posts for the first time", () => {
        assert.deepEqual(userRepository.all().map(user => user.getName()), ["Andre", "Sandro"]);
    });

    it("should create a new Post and add it to the User Object when the command username is followed by '->' and some text",
        () => {
            assert.equal(userRepository.find({ name: 'Andre' }).getPosts()[0].getText(),
                "Today is a great day!");

            let posts = userRepository.find({ name: 'Sandro' }).getPosts()
                .map(post => post.getText());
            
            assert.deepEqual(posts, [
                "Movies nowadays are just so bad...",
                "Not all movies are crap, though. Just sayin."
            ]);
        });

    it(`should add a user to the User class's 'following' list when the command is a username 
    followed by the word 'follow'`, () => {
        twitter.handleInput("Charne -> Can't wait for the weekend!");
        twitter.handleInput("Andre follows Charne");
        twitter.handleInput("Andre follows Sandro");

        assert.deepEqual(userRepository.find({ name: "Andre" }).getFollows().map(user => user.getName()), [
            "Charne", "Sandro"
        ])
    });

    it(`should display the user's wall when the input command is a username followed by the word 'wall'`, () => {
        // twitter.handleInput("Andre wall");

        // assert.deepEqual()
    })
});