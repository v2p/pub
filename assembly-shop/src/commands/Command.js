export class Command {
    constructor(comment = null) {
        this.comment = comment;
    }

    buildInstruction() {
        throw new Error('Not implemented');
    }

    run() {
        let instruction = this.buildInstruction();
        return this.comment !== null ? `# ${this.comment}:\n${instruction}` : instruction;
    }
}