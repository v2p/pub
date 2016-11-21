import {Command} from "./Command";

export class MaintainerCommand extends Command {
    constructor(maintainer, comment) {
        super(comment);
        this.argument = maintainer;
    }

    buildInstruction() {
        return `MAINTAINER ${this.argument}`;
    }
}