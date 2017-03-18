import {DockerfileBuilder as BaseBuilder} from '../DockerfileBuilder'
import * as commands from './../../commands/index';

let aptCacherSymbol = Symbol('aptCacher');

export class DockerfileBuilder extends BaseBuilder {
    /**
     * @param {boolean} shouldUse
     * @returns {DockerfileBuilder}
     */
    useAptCacher(shouldUse) {
        return shouldUse
            ? this.setCommand(aptCacherSymbol, new commands.DebBasedAptCacher())
            : this.unsetCommand(aptCacherSymbol);
    }

    /**
     * @param {Array} packagesToInstall
     * @param {Array} packagesToRemove
     * @returns {DockerfileBuilder}
     */
    install(packagesToInstall, packagesToRemove = []) {
        return this.addCommand(new commands.DebBasedInstall(
            packagesToInstall,
            packagesToRemove
        ));
    }
}
