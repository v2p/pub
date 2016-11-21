import {Command} from "./Command";

export class RunCommand extends Command {
    constructor(run, comment) {
        super(comment);
        this.argument = run;
    }

    buildInstruction() {
        return `RUN ${this.argument}`;
    }
}