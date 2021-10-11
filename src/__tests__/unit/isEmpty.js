import isEmpty from "../../isEmpty";
import root from "../../.internal/root";

const freeExports = typeof exports === "object" && exports !== null && !exports.nodeType && exports;

const freeModule = freeExports && typeof module === "object" && module !== null && !module.nodeType && module;

const moduleExports = freeModule && freeModule.exports === freeExports;

const Buffer = moduleExports ? root.Buffer : undefined;

describe("isEmpty should check if a value is empty object, collection, map or set if they have no own enumerable string keyed properties", () =>{
    it("should return true if the value is empty", () => {
        expect(isEmpty(null)).toBe(true)
    });

    it("should return true if the value is a number", () => {
        expect(isEmpty(1)).toBe(true)
    });

    it("should return true if the value is a boolean", () => {
        expect(isEmpty(true)).toBe(true)
    });

    it("should return false if the value is a non-empty array", () => {
        expect(isEmpty([1, 2, 3])).toBe(false)
    });

    it("should return false if the value is a string", () => {
        expect(isEmpty("abc")).toBe(false)
    });

    it("should return false if the value is a non-empty object", () => {
        expect(isEmpty({ "a": 1 })).toBe(false)
    });

    it("should return false if the value is a non-empty Buffer", () => {
        expect(isEmpty(new Buffer(2))).toBe(false)
    });

    it("should return true if the value is an empty types array", () => {
        expect(isEmpty(new Uint8Array)).toBe(true)
    });

    it("should return true if the value is an empty list of arguments", () => {
        expect(isEmpty(function() { return arguments }())).toBe(true)
    });

    it("should return false for a non-empty Map", () => {
        let myMap = new Map([
            [1, "one"],
            [3, "three"],
        ]);

        expect(isEmpty(myMap)).toBe(false)
    });

    it("should return false for a non-empty Set", () => {
        const set1 = new Set([1, 2, 3, 4])
        expect(isEmpty(set1)).toBe(false)
    });

    it("should return true for a empty prototype object", () => {
        expect(isEmpty(Object.prototype)).toBe(true)
    });
});