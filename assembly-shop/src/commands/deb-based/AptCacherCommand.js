import {Command} from "./../Command";

/**
 * Allows using of "apt-cacher-ng" tool. "Apt" will work faster because of cached data.
 */
export class AptCacherCommand extends Command {
    buildInstruction() {
        return `ARG APT_PROXY
RUN if [ "$APT_PROXY" ]; then \\
        echo "Acquire::http { Proxy \\"$APT_PROXY\\"; };" > /etc/apt/apt.conf.d/01proxy; \\
    else \\
        rm -f /etc/apt/apt.conf.d/01proxy; \\
    fi`;
    }
}