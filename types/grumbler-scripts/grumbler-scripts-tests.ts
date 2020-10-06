import { getKarmaConfig } from 'grumbler-scripts/config/karma.conf';
import {
    getCurrentVersion,
    getNextVersion,
    getWebpackConfig,
    WebpackConfigOptions,
} from 'grumbler-scripts/config/webpack.config';

// $ExpectError
getCurrentVersion();
getCurrentVersion({ version: 'foo' });
// $ExpectError
getNextVersion({ version: 'foo' }, 2);
getNextVersion({ version: 'foo' }, 'bar');

const FILE_NAME = 'mylibrary';
const MODULE_NAME = 'mylibrary';

const BASE_CONFIG: WebpackConfigOptions = {
    entry: './foo/bar.js',
    filename: `${FILE_NAME}.min.js`,
    modulename: MODULE_NAME,
    libraryTarget: 'window',
    path: './foo',
    test: true,
    debug: true,
    minify: true,
};

getWebpackConfig(BASE_CONFIG);

(karma: object) => getKarmaConfig(karma, { basePath: 'foo', webpack: getWebpackConfig() });
