import {Command} from "./Command";

export class ArgCommand extends Command {
    constructor(instruction) {
        super();
        this.instruction = instruction;
    }

    buildInstruction() {
        return `ARG ${this.instruction}`;
    }
}