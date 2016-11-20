import * as commands from './commands/index';

let fromSymbol = Symbol('from');
let maintainerSymbol = Symbol('maintainer');

export class DockerfileBuilder {
    constructor() {
        this.uniqueCommands = new Map();
    }

    /**
     * @param value
     * @param comment
     * @returns {DockerfileBuilder}
     */
    from(value, comment = null) {
        this.uniqueCommands.set(fromSymbol, new commands.From(value, comment));
        return this;
    }

    /**
     * @param value
     * @param comment
     * @returns {DockerfileBuilder}
     */
    maintainer(value, comment = null) {
        this.uniqueCommands.set(maintainerSymbol, new commands.Maintainer(value, comment));
        return this;
    }

    /**
     * @returns {Command[]|Map}
     */
    getCommands() {
        return this.uniqueCommands;
    }
}
