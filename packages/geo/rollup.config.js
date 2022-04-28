import { getRollupConfig } from '@xylabs/rollup-config'

import pkg from './package.json'

// eslint-disable-next-line import/no-default-export
export default getRollupConfig({ bundlePrefix: 'bundle/', outputs: ['node', 'node-esm'], pkg })
