import {Command} from "./Command";

export class FromCommand extends Command {
    constructor(instruction, comment) {
        super(comment);
        this.instruction = instruction;
    }

    buildInstruction() {
        return `FROM ${this.instruction}`;
    }
}