import {Command} from "./Command";

export class RunCommand extends Command {
    constructor(instruction, comment) {
        super(comment);
        this.instruction = instruction;
    }

    buildInstruction() {
        return `RUN ${this.instruction}`;
    }
}