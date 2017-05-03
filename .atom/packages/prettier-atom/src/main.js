const config = require('./config-schema.json');
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
const { CompositeDisposable } = require('atom');
const { createStatusTile, updateStatusTile, disposeTooltip } = require('./statusTile');

// local helpers
let format = null;
let formatOnSave = null;
let warnAboutLinterEslintFixOnSave = null;
let displayDebugInfo = null;
let toggleFormatOnSave = null;
let subscriptions = null;
let statusBarTile = null;
let tileElement = null;

// HACK: lazy load most of the code we need for performance
const lazyFormat = () => {
  if (!format) format = require('./format'); // eslint-disable-line global-require

  const editor = atom.workspace.getActiveTextEditor();
  if (editor) format(editor);
};

// HACK: lazy load most of the code we need for performance
const lazyFormatOnSave = () => {
  if (!formatOnSave) formatOnSave = require('./formatOnSave'); // eslint-disable-line global-require

  const editor = atom.workspace.getActiveTextEditor();
  if (editor) formatOnSave(editor);
};

// HACK: lazy load most of the code we need for performance
const lazyWarnAboutLinterEslintFixOnSave = () => {
  if (!warnAboutLinterEslintFixOnSave) {
    // eslint-disable-next-line global-require
    warnAboutLinterEslintFixOnSave = require('./warnAboutLinterEslintFixOnSave');
  }
  warnAboutLinterEslintFixOnSave();
};

// HACK: lazy load most of the code we need for performance
const lazyDisplayDebugInfo = () => {
  if (!displayDebugInfo) {
    // eslint-disable-next-line global-require
    displayDebugInfo = require('./displayDebugInfo');
  }
  displayDebugInfo();
};

const lazyToggleFormatOnSave = () => {
  if (!toggleFormatOnSave) {
    // eslint-disable-next-line global-require
    toggleFormatOnSave = require('./toggleFormatOnSave');
  }
  toggleFormatOnSave();
};

// public API
const activate = () => {
  subscriptions = new CompositeDisposable();

  subscriptions.add(atom.commands.add('atom-workspace', 'prettier:format', lazyFormat));
  subscriptions.add(atom.commands.add('atom-workspace', 'prettier:debug', lazyDisplayDebugInfo));
  subscriptions.add(
    atom.commands.add('atom-workspace', 'prettier:toggle-format-on-save', lazyToggleFormatOnSave),
  );

  subscriptions.add(
    atom.workspace.observeTextEditors(editor =>
      subscriptions.add(editor.getBuffer().onWillSave(() => lazyFormatOnSave(editor))),
    ),
  );
  subscriptions.add(
    atom.config.observe('linter-eslint.fixOnSave', () => lazyWarnAboutLinterEslintFixOnSave()),
  );
  subscriptions.add(
    atom.config.observe('prettier-atom.useEslint', () => lazyWarnAboutLinterEslintFixOnSave()),
  );

  // HACK: an Atom bug seems to be causing old configuration settings to linger for some users
  //       https://github.com/jlongster/prettier-atom/issues/72
  atom.config.unset('prettier-atom.singleQuote');
  atom.config.unset('prettier-atom.trailingComma');
};

const deactivate = () => {
  subscriptions.dispose();
  disposeTooltip();
  if (statusBarTile) {
    statusBarTile.destroy();
  }
};

const consumeStatusBar = (statusBar) => {
  tileElement = createStatusTile();
  statusBarTile = statusBar.addLeftTile({
    item: tileElement,
    priority: 1000,
  });
  updateStatusTile(subscriptions, tileElement);

  subscriptions.add(
    atom.config.observe('prettier-atom.formatOnSaveOptions.enabled', () =>
      updateStatusTile(subscriptions, tileElement),
    ),
  );
};

module.exports = {
  activate,
  deactivate,
  config,
  subscriptions,
  consumeStatusBar,
};
