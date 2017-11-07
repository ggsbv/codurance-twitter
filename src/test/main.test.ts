import assert = require("assert");
import { UserRepository } from "../database/UserRepository";
import { Twitter } from "../app/Twitter";
import { Post } from "../app/Post";
import { PostRepository } from "../database/PostRepository";
import { User } from "../app/User";

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

    it("should create a new Post and add it to the User Object when the command user getName is followed by '->' and some text",
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

    it("should read the user's timeline when the input consists of solely a user name", () => {

        console.log(userRepository.find({ name: "Sandro" }).getPosts());
        // assert.equal(userRepository.find({ name: "Sandro" }).timeline(), )
    })
});