const {expect} = require("chai");
const {rickRoller} = require("./index")

describe("Rick Roller", () => {
    it("should returns a good url", () => {
      
        expect(rickRoller()).to.equal("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      });


});