import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfigurations } from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfigurations {

    const {port} = options;

    return {
        port: port,
        open: true,
        historyApiFallback: true,
    }
}