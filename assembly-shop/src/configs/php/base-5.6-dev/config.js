import createCommands from '../../../commands-presets/ubuntu1604';
import * as commands from '../../../commands/index';

let configCommands = createCommands();

configCommands.push([
    new commands.From('ubuntu:123'),
    new commands.Maintainer('123123'),
]);

export default configCommands;