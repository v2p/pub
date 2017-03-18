import {Command} from "./Command";

export class FromCommand extends Command {
    constructor(instruction) {
        super();
        this.instruction = instruction;
    }

    buildInstruction() {
        return `FROM ${this.instruction}`;
    }
}