import {Command} from "./Command";

export class FromCommand extends Command {
    constructor(from, comment) {
        super(comment);
        this.from = from;
    }

    buildInstruction() {
        return `FROM ${this.from}`;
    }
}