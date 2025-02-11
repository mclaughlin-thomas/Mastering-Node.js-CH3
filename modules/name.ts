export class Name {
    // the export keyword is used to make features accessible outside of the file
    // so they can be used by other parts of the application
    constructor(public first: string, public second: string) {}
    get nameMessage() {
        return `Hello ${this.first} ${this.second}`;
    }
}