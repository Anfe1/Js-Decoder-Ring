const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar shift tests", () => {
    it("Should return false if there is no shift, its < -25 or > 25", () => {

        const inputMessage = "thinkful";
        const shift = "";
        encode = true 

        const expected = false;
        const actual = caesar(inputMessage, shift, encode);

        expect(actual).to.equal(expected);
    })

    it("It should ignore capital letters", () => {

        const inputMessage = "ThinKful";
        const shift = 3;

        const expected = "wklqnixo";
        const actual = caesar(inputMessage, shift, encode);

        expect(actual).to.equal(expected)
    })

    it("Should wrap around the alphabet when shift excedes the remaining letters in an alphabet", () => {

        const inputMessage = "zthinkfulz"
        const shift = 3;

        const expected = "cwklqnixoc";
        const actual = caesar(inputMessage, shift, encode);

        expect(actual).to.equal(expected)
    })

    it("Should maintain spaces and non-alphabetic characters before and after encoding", () => {

        const inputMessage = "! thinkful !"
        const shift = 3;

        const expected = "! wklqnixo !";
        const actual = caesar(inputMessage, shift, encode);

        expect(actual).to.equal(expected)
    })
})
