import createCommands from '../../../commands-presets/ubuntu1604';
import * as commands from '../../../commands/index';

let configCommands = createCommands();

configCommands.push([
    new commands.From('ubuntu:789'),
    new commands.Maintainer('54321'),
]);

export default configCommands;