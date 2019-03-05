'use strict';

/**
 * @type {EmmetOutputProfile}
 */
export default {
	indent: '\t',
	tagCase: '',
	attributeCase: '',
	attributeQuotes: 'double',
	format: true,
	formatSkip: ['html'],
	formatForce: ['body'],
	inlineBreak: 3,
	compactBooleanAttributes: false,
	booleanAttributes: ['contenteditable', 'seamless', 'async', 'autofocus',
		'autoplay', 'checked', 'controls', 'defer', 'disabled', 'formnovalidate',
		'hidden', 'ismap', 'loop', 'multiple', 'muted', 'novalidate', 'readonly',
		'required', 'reversed', 'selected', 'typemustmatch'],
	selfClosingStyle: 'html',
	inlineElements: ['a', 'abbr', 'acronym', 'applet', 'b', 'basefont', 'bdo',
		'big', 'br', 'button', 'cite', 'code', 'del', 'dfn', 'em', 'font', 'i',
		'iframe', 'img', 'input', 'ins', 'kbd', 'label', 'map', 'object', 'q',
		's', 'samp', 'select', 'small', 'span', 'strike', 'strong', 'sub', 'sup',
		'textarea', 'tt', 'u', 'var']
};
