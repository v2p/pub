import {createCommands} from '../../../commands-presets/ubuntu1604';
import * as commands from '../../../commands/index';

export let configCommands = createCommands();

configCommands.push(...[
    new commands.From('ubuntu:789'),
    new commands.Maintainer('54321'),
    new commands.Install([1, 2, 3], 'install something')
]);