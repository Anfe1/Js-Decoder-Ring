const { expect } = require("chai");
const { polybius } = require("../src/polybius");


describe("polybius square tests", () => {
    it("Should encode and translate letters i and j to 42", () => {

        const inputMessage = "thinkfulj";
        const encodeInput = true
        const expected = "443242335212541342";
        const actual = polybius(inputMessage, encodeInput);

        expect(actual).to.equal(expected);
    })

    it("Should decode and translate 42 to (i/j)", () => {

        const inputMessage = "443242335212541342";
        const encodeInput = false
        const expected = "th(i/j)nkful(i/j)";
        const actual = polybius(inputMessage, encodeInput);

        expect(actual).to.equal(expected);
    })

    it("Should ignore capital letters", () => {

        const inputMessage = "ThinkFul";
        const encodeInput = true
        const expected = "4432423352125413";
        const actual = polybius(inputMessage, encodeInput);

        expect(actual).to.equal(expected);
    })

    it("Should maintain spaces in the message", () => {

        const inputMessage = "thinkful thinkful";
        const encodeInput = true
        const expected = "4432423352125413 4432423352125413";
        const actual = polybius(inputMessage, encodeInput);

        expect(actual).to.equal(expected);
    })
})
