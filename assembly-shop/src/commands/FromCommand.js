export default class FromCommand {
    constructor(from) {
        this.from = from;
    }

    run() {
        return `FROM ${this.from}`;
    }
}