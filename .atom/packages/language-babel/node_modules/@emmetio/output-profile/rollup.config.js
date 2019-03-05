export default {
	input: './index.js',
	output: [
		{ format: 'cjs', file: 'dist/output-profile.cjs.js' },
		{ format: 'es',  file: 'dist/output-profile.es.js' }
	]
};
