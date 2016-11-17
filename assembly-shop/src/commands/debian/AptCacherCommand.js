import {Command} from "./../Command";

export class AptCacherCommand extends Command {
    /**
     * @param {Array} packages
     * @param comment
     */
    constructor(packages, comment = null) {
        super(comment);
        this.packages = packages;
    }

    buildInstruction() {
        let packagesString = this.packages.join(' \\\n        ');

        return `RUN apt-get update && apt-get install -y --no-install-recommends \\
        ${packagesString} \\
    && apt-get clean -y \\
    && apt-get autoremove -y \\
    && rm -rf /var/lib/apt/lists/*`
    }
}