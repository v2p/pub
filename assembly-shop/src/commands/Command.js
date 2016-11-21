export class Command {
    constructor(comment) {
        this.comment = comment;
    }

    buildInstruction() {
        throw new Error('Not implemented');
    }

    run() {
        let instruction = this.buildInstruction();
        return !!this.comment ? `# ${this.comment}:\n${instruction}` : instruction;
    }
}