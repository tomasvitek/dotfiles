interface EmmetOutputProfile {
	/**
	 * String for one-level indentation. For example, `\t` or `  ` (N spaces)
	 */
	indent?: string;

	/**
	 * Tag case: lower, upper or '' (keep as-is)
	 */
	tagCase?: '' | 'lower' | 'upper';

	/**
	 * Attribute name case: lower, upper or '' (keep as-is)
	 * @type {String}
	 */
	attributeCase?: '' | 'lower' | 'upper';

	/**
	 * Attribute value quotes: 'single' or 'double'
	 */
	attributeQuotes?: 'single' | 'double';

	/**
	 * Enable output formatting (indentation and line breaks)
	 */
	format?: boolean;

	/**
	 * A list of tag names that should not get inner indentation
	 */
	formatSkip?: string[];

	/**
	 * A list of tag names that should *always* get inner indentation.
	 */
	formatForce?: string[];

	/**
	 * How many inline sibling elements should force line break for each tag.
	 * Set to 0 to output all inline elements without formatting.
	 * Set to 1 to output all inline elements with formatting (same as block-level).
	 */
	inlineBreak?: number;

	/**
	 * Produce compact notation of boolean attributes: attributes where name equals value.
	 * With this option enabled, output `<div contenteditable>` instead of
	 * `<div contenteditable="contenteditable">`
	 */
	compactBooleanAttributes?: boolean;

	/**
	 * A set of boolean attributes
	 */
	booleanAttributes?: string[];

	/**
	 * Style of self-closing tags: html (`<br>`), xml (`<br/>`) or xhtml (`<br />`)
	 */
	selfClosingStyle?: 'html' | 'xml' | 'xhtml';

	/**
	 * A set of inline-level elements
	 */
	inlineElements?: string[];

	/**
	 * A function that takes field index and optional placeholder and returns 
	 * a string field (tabstop) for host editor. For example, a TextMate-style 
	 * field is `$index` or `${index:placeholder}`
	 * @param index 
	 * @param placeholder 
	 */
	field(index: number, placeholder?: string): string;
}
