// @flow

// types for working with Atom stuff
declare type FilePath = string;
declare type Point = { row: number, column: number };
declare type Range = { start: Point, end: Point };
declare type Ranges = Array<Range>;
// eslint-disable-next-line no-undef
declare type Globs = Array<string>;
// eslint-disable-next-line no-undef
declare type TextEditor = {
  getGrammar: () => { scopeName: string },
  getBuffer: () => { getRange: () => Range },
  getCursorScreenPosition: () => Point,
  getLastCursor: () => { getScopeDescriptor: () => string },
  getSelectedText: () => string,
  getSelectedBufferRanges: () => Ranges,
  // getTextInRange: () => string,
  getTextInBufferRange: () => string,
  setCursorScreenPosition: (point: Point) => Point,
  setTextInBufferRange: (bufferRange: Range, text: string) => Range,
  buffer: { file: ?{ path: ?FilePath } },
  backwardsScanInBufferRange: (
    regex: RegExp,
    Range: Range,
    iter: ({
      match: string,
      matchText: string,
      range: Range,
      stop: Function,
      replace: (replacement: string) => void,
    }) => void,
  ) => void,
};
declare type Atom$Disposable = any;
declare type Atom$View = any;
declare type Atom$Workspace = any;
declare type Atom$Command = { name: string, displayName: string };
declare var atom: {
  commands: {
    dispatch: (view: Atom$View, commandName: string) => void,
    findCommands: ({ target: Atom$View }) => Array<Atom$Command>,
  },
  config: {
    get: (key: string) => any,
    set: (key: string) => any,
  },
  notifications: {
    addError: (message: string, options?: { detail?: string, dismissable?: boolean }) => void,
    addInfo: (message: string, options?: { detail?: string, dismissable?: boolean }) => void,
  },
  tooltips: {
    add: (target: HTMLElement, options?: { title?: string }) => Atom$Disposable
  },
  views: {
    getView: Atom$Workspace => Atom$View,
  },
  workspace: Atom$Workspace,
  getVersion: () => string,
};
