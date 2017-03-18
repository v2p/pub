export class Command {
    buildInstruction() {
        throw new Error('Not implemented');
    }

    run() {
        return this.buildInstruction();
    }
}