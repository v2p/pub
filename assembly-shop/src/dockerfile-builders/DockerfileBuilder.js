import * as commands from './../commands/index';
import RunCommandBuilder from './../command-builders/RunCommandBuilder'

let fromSymbol = Symbol('from');
let maintainerSymbol = Symbol('maintainer');

export class DockerfileBuilder {
    constructor() {
        this.commandsMap = new Map();
        this.commandsOrder = [];
    }

    /**
     * @param {Command} command
     * @returns {DockerfileBuilder}
     */
    addCommand(command) {
        let symbol = Symbol();
        this.commandsMap.set(symbol, command);
        this.commandsOrder.push(symbol);

        return this;
    }

    /**
     * @param {Symbol} commandSymbol
     * @param {Command} command
     * @returns {DockerfileBuilder}
     */
    setCommand(commandSymbol, command) {
        this.commandsMap.set(commandSymbol, command);

        if (this.commandsOrder.indexOf(commandSymbol) == -1) {
            this.commandsOrder.push(commandSymbol);
        }

        return this;
    }

    /**
     * @param {Symbol} commandSymbol
     * @returns {DockerfileBuilder}
     */
    unsetCommand(commandSymbol) {
        this.commandsMap.delete(commandSymbol);

        let commandIndex = this.commandsOrder.indexOf(commandSymbol);
        if (commandIndex != -1) {
            this.commandsOrder.splice(commandIndex, 1);
        }

        return this;
    }

    comment(value) {
        return this.addCommand(new commands.Comment(value));
    }

    /**
     * @param {string} value
     * @returns {DockerfileBuilder}
     */
    from(value) {
        return this.setCommand(fromSymbol, new commands.From(value));
    }

    /**
     * @param {string} value
     * @returns {DockerfileBuilder}
     */
    maintainer(value) {
        return this.setCommand(maintainerSymbol, new commands.Maintainer(value));
    }

    /**
     * @param {string} value
     * @returns {DockerfileBuilder}
     */
    run(value) {
        return this.addCommand(new commands.Run(value));
    }

    /**
     * @param {string} value
     * @returns {RunCommandBuilder}
     */
    runBuilder(value) {
        return new RunCommandBuilder(this, value);
    }

    /**
     * @returns {Command[]}
     */
    *getCommands() {
        for (let commandSymbol of this.commandsOrder) {
            yield this.commandsMap.get(commandSymbol);
        }
    }
}
