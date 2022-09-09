const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution cipher tests", () => {
    it("Should return false if the given alphabet is not exactly 26", () => {

        const inputMessage = "thinkful";
        const encodeInput = true
        const substitutionAlphabet = "xoyqmcgrukswaflnthdjpzibevgh";
        const expected = false;
        const actual = substitution(inputMessage, substitutionAlphabet, encodeInput);

        expect(actual).to.equal(expected);
    })

    it("Should correctly translate the phrase based on the given alphabet", () => {

        const inputMessage = "thinkful";
        const encodeInput = true
        const substitutionAlphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "jrufscpw";
        const actual = substitution(inputMessage, substitutionAlphabet, encodeInput);

        expect(actual).to.equal(expected);
    })

    it("Should return false if there are any duplicates in the given alphabet", () => {

        const inputMessage = "thinkful";
        const encodeInput = true
        const substitutionAlphabet = "abcabcabcabcabcabcabcabcyz";
        const expected = false;
        const actual = substitution(inputMessage, substitutionAlphabet, encodeInput);

        expect(actual).to.equal(expected);
    })

    it("Should maintain spaces in the message before and after encoding or decoding", () => {

        const inputMessage = "thinkful thinkful";
        const encodeInput = true
        const substitutionAlphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "jrufscpw jrufscpw";
        const actual = substitution(inputMessage, substitutionAlphabet, encodeInput);

        expect(actual).to.equal(expected);
    })

    it("Should ignore capital letters", () => {

        const inputMessage = "ThiNkFul";
        const encodeInput = true
        const substitutionAlphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "jrufscpw";
        const actual = substitution(inputMessage, substitutionAlphabet, encodeInput);

        expect(actual).to.equal(expected);
    })
})