import {getDockerfileBuilder} from '../../../dockerfile-presets/ubuntu1604';

export default getDockerfileBuilder()
    .install(
        //['ca-certificates', 'software-properties-common'],
        [],
        [],
        'add custom PHP repository and some system tools'
    );