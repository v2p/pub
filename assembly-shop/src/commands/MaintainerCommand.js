import {Command} from "./Command";

export class MaintainerCommand extends Command {
    constructor(instruction) {
        super();
        this.instruction = instruction;
    }

    buildInstruction() {
        return `MAINTAINER ${this.instruction}`;
    }
}