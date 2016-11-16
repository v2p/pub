import * as commands from '../commands/index';

export default function createCommands() {
    return [
        new commands.From('ubuntu:16.04'),
        new commands.Maintainer('Vladimir Posvistelik <v.posvistelik@gmail.com>'),
    ]
}