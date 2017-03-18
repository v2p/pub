import {DockerfileBuilder as BaseBuilder} from '../DockerfileBuilder'
import * as commands from './../../commands/deb-based/index';

let aptCacherSymbol = Symbol('aptCacher');

export class DockerfileBuilder extends BaseBuilder {
    /**
     * @param {boolean} shouldUse
     * @returns {DockerfileBuilder}
     */
    useAptCacher(shouldUse) {
        return shouldUse
            ? this.setCommand(aptCacherSymbol, new commands.AptCacher())
            : this.unsetCommand(aptCacherSymbol);
    }

    /**
     * @param {Array} packagesToInstall
     * @param {Array} packagesToRemove
     * @returns {DockerfileBuilder}
     */
    install(packagesToInstall, packagesToRemove = []) {
        return this.addCommand(new commands.Install(
            packagesToInstall,
            packagesToRemove
        ));
    }
}
