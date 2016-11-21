import {DockerfileBuilder as BaseBuilder} from '../DockerfileBuilder'
import * as commands from './../../commands/index';

let aptCacherSymbol = Symbol('aptCacher');

export class DockerfileBuilder extends BaseBuilder{
    /**
     * @param {boolean} shouldUse
     * @param {string|null} comment
     * @returns {DockerfileBuilder}
     */
    useAptCacher(shouldUse, comment = null) {
        return shouldUse
            ? this.setCommand(aptCacherSymbol, new commands.DebBasedAptCacher(comment))
            : this.unsetCommand(aptCacherSymbol);
    }

    /**
     * @param {Array} packagesToInstall
     * @param {Array} packagesToRemove
     * @param {string|null} comment
     * @returns {DockerfileBuilder}
     */
    install(packagesToInstall, packagesToRemove = [], comment = null) {
        return this.addCommand(new commands.DebBasedInstall(
            packagesToInstall,
            packagesToRemove,
            comment
        ));
    }
}
