export default {
	input: './index.js',
	external: [
		'@emmetio/stream-reader',
		'@emmetio/stream-reader-utils'
	],
	output: [{
		format: 'cjs',
		sourcemap: true,
		exports: 'named',
		file: 'dist/field-parser.cjs.js'
	}, {
		format: 'es',
		sourcemap: true,
		file: 'dist/field-parser.es.js'
	}]
};
