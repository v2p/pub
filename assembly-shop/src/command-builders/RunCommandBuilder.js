export default class RunCommandBuilder {
    /**
     * @param {string} initialValue
     * @param {DockerfileBuilder} dockerfileBuilder
     */
    constructor(dockerfileBuilder, initialValue) {
        this.dockerfileBuilder = dockerfileBuilder;
        this.actions = [initialValue];
    }

    /**
     * @param {string} value
     * @returns {RunCommandBuilder}
     */
    andRun(value) {
        this.actions.push(value);
        return this;
    }

    /**
     * @param comment
     * @returns {DockerfileBuilder}
     */
    runBuilderEnd(comment = null) {
        let value = this.actions.join(' \\\n    && ');
        return this.dockerfileBuilder.run(value, comment);
    }
}