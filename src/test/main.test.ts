import assert = require("assert");
import { UserRepository } from "./UserRepository";
import { Twitter } from "./Twitter";

describe("The twitter application", () => {

    it("should create and store a new User when the user posts for the first time", () => {
        let repository = new UserRepository();
        let twitter = new Twitter(repository);

        twitter.handleInput("Andre Today is a great day!");
        twitter.handleInput("Sandro Movies nowadays are just so bad...");
        twitter.handleInput("Sandro Not all movies are crap, though. Just sayin'.");

        assert.equal(repository.all().length, 2);
        assert.equal(repository.all()[0].getName(), "Andre");
        assert.equal(repository.all()[1].getName(), "Sandro");
    });
});