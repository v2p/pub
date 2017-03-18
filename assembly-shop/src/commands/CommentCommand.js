import {Command} from "./Command";

export class CommentCommand extends Command {
    constructor(instruction) {
        super();
        this.instruction = instruction;
    }

    buildInstruction() {
        return `# ${this.instruction}`;
    }
}