import {Command} from "./Command";

export class FromCommand extends Command {
    constructor(from, comment) {
        super(comment);
        this.argument = from;
    }

    buildInstruction() {
        return `FROM ${this.argument}`;
    }
}