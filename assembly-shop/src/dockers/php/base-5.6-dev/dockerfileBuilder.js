import {getDockerfileBuilder} from '../../../dockerfile-presets/ubuntu1604';

export default getDockerfileBuilder()
    .from('ubuntu:123')
    .maintainer('123123');