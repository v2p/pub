import {Command} from "./Command";

export class RunCommand extends Command {
    constructor(instruction) {
        super();
        this.instruction = instruction;
    }

    buildInstruction() {
        return `RUN ${this.instruction}`;
    }
}