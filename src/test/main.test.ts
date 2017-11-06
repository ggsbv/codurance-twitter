import assert = require("assert");
import { UserRepository } from "./UserRepository";
import { Twitter } from "./Twitter";
import { Post } from "./Post";
import { PostRepository } from "./PostRepository";

describe("The twitter application", () => {

    it("should create and store a new User when the user posts for the first time", () => {
        let userRepository = new UserRepository();
        let postRepository = new PostRepository();

        let twitter = new Twitter({
            user: userRepository,
            post: postRepository
        });

        twitter.handleInput("Andre -> Today is a great day!");
        twitter.handleInput("Sandro -> Movies nowadays are just so bad...");
        twitter.handleInput("Sandro -> Not all movies are crap, though. Just sayin'.");


        assert.equal(userRepository.all().length, 2);
        assert.equal(userRepository.all()[0].getName(), "Andre");
        assert.equal(userRepository.all()[1].getName(), "Sandro");
    });

    // it("should create a new Post and add it to the User Object when the command user getName is followed by '->' and some text",
    //     () => {
    //         let twitter = new Twitter();
    //         let userRepository = new UserRepository();
    //
    //         twitter.handleInput("Andre -> Today is a great day!");
    //
    //         assert.equal(userRepository.find({ getName: 'Andre' }).posts()[0].text(), "Today is a great day!");
    //     })
});