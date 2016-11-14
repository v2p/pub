export default class MaintainerCommand {
    constructor(maintainer) {
        this.maintainer = maintainer;
    }

    run() {
        return `MAINTAINER ${this.maintainer}`;
    }
}