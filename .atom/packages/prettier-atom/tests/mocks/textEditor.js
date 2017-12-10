// @flow
const textEditorFactory = (overrides?: {} = {}): TextEditor =>
  Object.assign(
    {},
    {
      backwardsScanInBufferRange: jest.fn(),
      buffer: {
        file: {
          path: 'xyz.js',
        },
      },
      getBuffer: jest.fn(() => ({
        getRange: jest.fn(() => ({
          isEqual: jest.fn(),
          start: { row: 0, column: 0 },
          end: { row: 0, column: 0 },
        })),
        setTextViaDiff: jest.fn(),
      })),
      getGrammar: jest.fn(() => ({ scopeName: 'FAKE SCOPE NAME' })),
      getSelectedText: jest.fn(),
      getLastCursor: jest.fn(),
      getCursorScreenPosition: jest.fn(),
      getTextInBufferRange: jest.fn(),
      setTextInBufferRange: jest.fn(),
      getSelectedBufferRanges: jest.fn(),
      setCursorScreenPosition: jest.fn(),
    },
    overrides,
  );

module.exports = textEditorFactory;
