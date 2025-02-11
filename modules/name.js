"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
class Name {
    first;
    second;
    // the export keyword is used to make features accessible outside of the file
    // so they can be used by other parts of the application
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get nameMessage() {
        return `Hello ${this.first} ${this.second}`;
    }
}
exports.Name = Name;
