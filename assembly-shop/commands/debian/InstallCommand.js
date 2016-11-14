export default class InstallCommand {
    /**
     * @param {Array} packages
     */
    constructor(packages) {
        this.packages = packages;
    }

    run() {
        let packagesString = this.packages.join(' \\\n\t');

        return `
RUN apt-get update && apt-get install -y --no-install-recommends \
    ${packagesString} && apt-get clean -y \
    && apt-get autoremove -y \
&& rm -rf /var/lib/apt/lists/*`
    }
}