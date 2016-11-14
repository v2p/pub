import {default as getCommands} from '../../../commands-presets/ubuntu1604';
import * as commands from '../../../commands/index';

let configCommands = getCommands();

configCommands.push([
    new commands.From('ubuntu:123'),
    new commands.Maintainer('123123'),
]);

export default configCommands;