import {getDockerfileBuilder} from '../../../dockerfile-presets/ubuntu1604';

export default getDockerfileBuilder()
    .install(
        //['ca-certificates', 'software-properties-common'],
        [],
        [],
        'add custom PHP repository and some system tools'
    )
    .run('something')
    .runBuilder('apt-get update')
        .andRun('apt-get install -y --no-install-recommends apt-cacher-ng')
        .andRun('apt-get clean -y')
        .andRun('apt-get autoremove -y')
        .andRun('rm -rf /var/lib/apt/lists/*')
    .runBuilderEnd('some funny comment');