import {Command} from "./Command";

export class MaintainerCommand extends Command {
    constructor(instruction, comment) {
        super(comment);
        this.instruction = instruction;
    }

    buildInstruction() {
        return `MAINTAINER ${this.instruction}`;
    }
}