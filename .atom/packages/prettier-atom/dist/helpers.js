'use strict';

var _require = require('atom-linter'),
    findCached = _require.findCached;

var fs = require('fs');
var minimatch = require('minimatch');
var path = require('path');

// constants
var LINE_SEPERATOR_REGEX = /(\r|\n|\r\n)/;
var EMBEDDED_SCOPES = ['text.html.vue', 'text.html.basic'];

// local helpers
var getCurrentScope = function getCurrentScope(editor) {
  return editor.getGrammar().scopeName;
};

// robwise: my apologies for this one, but I love function composition and want to use one that is Facebook
// flow inferrable. See https://drboolean.gitbooks.io/mostly-adequate-guide/ch5.html
var flow = function flow(func) {
  for (var _len = arguments.length, funcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    funcs[_key - 1] = arguments[_key];
  }

  return function () {
    return funcs.length ? flow.apply(undefined, funcs)(func.apply(undefined, arguments)) : func.apply(undefined, arguments);
  };
};

var getDirFromFilePath = function getDirFromFilePath(filePath) {
  return path.parse(filePath).dir;
};

var getNearestEslintignorePath = function getNearestEslintignorePath(filePath) {
  return findCached(getDirFromFilePath(filePath), '.eslintignore');
};

var getFilePathRelativeToEslintignore = function getFilePathRelativeToEslintignore(filePath) {
  return flow(getNearestEslintignorePath, getDirFromFilePath, function (eslintignoreDir) {
    return path.relative(eslintignoreDir, filePath);
  })(filePath);
};

var getLinesFromFilePath = function getLinesFromFilePath(filePath) {
  return fs.readFileSync(filePath, 'utf8').split(LINE_SEPERATOR_REGEX);
};

var getIgnoredGlobsFromNearestEslintIgnore = flow(getNearestEslintignorePath, function (maybePath) {
  return maybePath ? getLinesFromFilePath(maybePath) : [];
});

var someGlobsMatchFilePath = function someGlobsMatchFilePath(globs, filePath) {
  return globs.some(function (glob) {
    return minimatch(filePath, glob);
  });
};

var getAtomTabLength = function getAtomTabLength(editor) {
  return atom.config.get('editor.tabLength', { scope: editor.getLastCursor().getScopeDescriptor() });
};

var useAtomTabLengthIfAuto = function useAtomTabLengthIfAuto(editor, tabLength) {
  return tabLength === 'auto' ? getAtomTabLength(editor) : Number(tabLength);
};

// public helpers
var getConfigOption = function getConfigOption(key) {
  return atom.config.get('prettier-atom.' + key);
};

var shouldDisplayErrors = function shouldDisplayErrors() {
  return !getConfigOption('silenceErrors');
};

var getPrettierOption = function getPrettierOption(key) {
  return getConfigOption('prettierOptions.' + key);
};

var getCurrentFilePath = function getCurrentFilePath(editor) {
  return editor.buffer.file.path;
};

var isInScope = function isInScope(editor) {
  return getConfigOption('formatOnSaveOptions.scopes').includes(getCurrentScope(editor));
};

var isCurrentScopeEmbeddedScope = function isCurrentScopeEmbeddedScope(editor) {
  return EMBEDDED_SCOPES.includes(getCurrentScope(editor));
};

var shouldUseEslint = function shouldUseEslint() {
  return getConfigOption('useEslint');
};

var isFilePathEslintignored = function isFilePathEslintignored(filePath) {
  return someGlobsMatchFilePath(getIgnoredGlobsFromNearestEslintIgnore(filePath), getFilePathRelativeToEslintignore(filePath));
};

var isFormatOnSaveEnabled = function isFormatOnSaveEnabled() {
  return getConfigOption('formatOnSaveOptions.enabled');
};

var shouldRespectEslintignore = function shouldRespectEslintignore() {
  return getConfigOption('formatOnSaveOptions.respectEslintignore');
};

var getPrettierOptions = function getPrettierOptions(editor) {
  return {
    printWidth: getPrettierOption('printWidth'),
    tabWidth: useAtomTabLengthIfAuto(editor, getPrettierOption('tabWidth')),
    parser: getPrettierOption('parser'),
    singleQuote: getPrettierOption('singleQuote'),
    trailingComma: getPrettierOption('trailingComma'),
    bracketSpacing: getPrettierOption('bracketSpacing'),
    jsxBracketSameLine: getPrettierOption('jsxBracketSameLine')
  };
};

module.exports = {
  getConfigOption: getConfigOption,
  shouldDisplayErrors: shouldDisplayErrors,
  getPrettierOption: getPrettierOption,
  getCurrentFilePath: getCurrentFilePath,
  isInScope: isInScope,
  isCurrentScopeEmbeddedScope: isCurrentScopeEmbeddedScope,
  isFilePathEslintignored: isFilePathEslintignored,
  isFormatOnSaveEnabled: isFormatOnSaveEnabled,
  shouldUseEslint: shouldUseEslint,
  shouldRespectEslintignore: shouldRespectEslintignore,
  getPrettierOptions: getPrettierOptions
};