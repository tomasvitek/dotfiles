'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require('lodash/fp');

var _require = require('../editorInterface'),
    getCurrentFilePath = _require.getCurrentFilePath,
    isCurrentScopeTypescriptScope = _require.isCurrentScopeTypescriptScope,
    isCurrentScopeCssScope = _require.isCurrentScopeCssScope,
    isCurrentScopeJsonScope = _require.isCurrentScopeJsonScope,
    isCurrentScopeGraphQlScope = _require.isCurrentScopeGraphQlScope,
    isCurrentScopeMarkdownScope = _require.isCurrentScopeMarkdownScope;

var _require2 = require('../atomInterface'),
    shouldUseEditorConfig = _require2.shouldUseEditorConfig,
    getPrettierOptions = _require2.getPrettierOptions,
    getAtomTabLength = _require2.getAtomTabLength;

var buildEditorConfigOptions = require('./buildEditorConfigOptions');

var _require3 = require('../helpers'),
    getPrettierInstance = _require3.getPrettierInstance;

var isDefined = _.negate(_.isNil);

var isAppropriateToBuildEditorConfigOptions = _.overEvery([isDefined, shouldUseEditorConfig]);

var buildEditorConfigOptionsIfAppropriate = _.flow(getCurrentFilePath, _.cond([[isAppropriateToBuildEditorConfigOptions, buildEditorConfigOptions]]));

var getPrettierConfigOptions = _.cond([[_.flow(getCurrentFilePath, isDefined), function (editor) {
  return isDefined(getPrettierInstance(editor).resolveConfig.sync) ? getPrettierInstance(editor).resolveConfig.sync(getCurrentFilePath(editor)) : null;
}]]);

var buildPrettierOptions = function buildPrettierOptions(editor) {
  var optionsFromSettings = getPrettierOptions();

  if (optionsFromSettings.tabWidth === 'auto') {
    optionsFromSettings.tabWidth = getAtomTabLength(editor);
  }

  if (isCurrentScopeTypescriptScope(editor)) {
    optionsFromSettings.parser = 'typescript';
  }

  if (isCurrentScopeCssScope(editor)) {
    optionsFromSettings.parser = 'postcss';
  }

  if (isCurrentScopeJsonScope(editor)) {
    optionsFromSettings.parser = 'json';
    optionsFromSettings.trailingComma = 'none';
  }

  if (isCurrentScopeGraphQlScope(editor)) {
    optionsFromSettings.parser = 'graphql';
  }

  if (isCurrentScopeMarkdownScope(editor)) {
    optionsFromSettings.parser = 'markdown';
  }

  return (0, _extends3.default)({}, optionsFromSettings, buildEditorConfigOptionsIfAppropriate(editor), getPrettierConfigOptions(editor));
};

module.exports = buildPrettierOptions;