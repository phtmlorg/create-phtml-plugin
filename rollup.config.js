import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const input = 'src/index.js';
const output = { file: 'index.js', format: 'cjs', strict: false };

export default {
	input,
	output,
	plugins: [
		babel({
			plugins: [
				'@babel/syntax-dynamic-import'
			],
			presets: [
				['@babel/env', {
					corejs: 3,
					loose: true,
					modules: false,
					targets: { node: 8 },
					useBuiltIns: 'entry'
				}]
			]
		}),
		terser(),
		addHashBang()
	]
};

function addHashBang () {
	return {
		name: 'add-hash-bang',
		renderChunk(code) {
			return `#!/usr/bin/env node\n${code}`;
		}
	};
}
