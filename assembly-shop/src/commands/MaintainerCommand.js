import {Command} from "./Command";

export class MaintainerCommand extends Command {
    constructor(maintainer, comment) {
        super(comment);
        this.maintainer = maintainer;
    }

    buildInstruction() {
        return `MAINTAINER ${this.maintainer}`;
    }
}