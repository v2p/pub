import {Command} from "./../Command";

export class InstallCommand extends Command {
    /**
     * @param {Array} packagesToInstall
     * @param {Array} packagesToRemove
     */
    constructor(packagesToInstall, packagesToRemove) {
        super();
        this.packagesToInstall = packagesToInstall;
        this.packagesToRemove = packagesToRemove;
    }

    buildInstruction() {
        let packagesSeparator = ' \\\n        ';

        let packagesToInstallString = this.packagesToInstall.length > 0
            ? `&& apt-get install -y --no-install-recommends ${this.packagesToInstall.join(packagesSeparator)} \\`
            : '';

        let packagesToRemoveString = this.packagesToRemove.length > 0
            ? `&& apt-get remove -y ${this.packagesToRemove.join(packagesSeparator)} \\`
            : '';

        return `RUN apt-get update \\ ${packagesToInstallString} ${packagesToRemoveString}
    && apt-get clean -y \\
    && apt-get autoremove -y \\
    && rm -rf /var/lib/apt/lists/*`
    }
}