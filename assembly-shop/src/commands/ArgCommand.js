import {Command} from "./Command";

export class ArgCommand extends Command {
    constructor(instruction, comment) {
        super(comment);
        this.instruction = instruction;
    }

    buildInstruction() {
        return `ARG ${this.instruction}`;
    }
}