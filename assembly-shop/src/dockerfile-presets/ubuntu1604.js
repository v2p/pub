import {DockerfileBuilder} from '../dockerfile-builders/deb-based/DockerfileBuilder';

export function getDockerfileBuilder() {
    let builder = new DockerfileBuilder();

    return builder
        .from('ubuntu:16.04')
        .maintainer('Vladimir Posvistelik <v.posvistelik@gmail.com>');
}