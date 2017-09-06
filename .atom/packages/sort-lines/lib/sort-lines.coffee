RangeFinder = require './range-finder'
naturalSort = require 'javascript-natural-sort'

module.exports =
  activate: ->
    atom.commands.add 'atom-text-editor:not([mini])',
      'sort-lines:sort': ->
        editor = atom.workspace.getActiveTextEditor()
        sortLines(editor)
      'sort-lines:reverse-sort': ->
        editor = atom.workspace.getActiveTextEditor()
        sortLinesReversed(editor)
      'sort-lines:unique': ->
        editor = atom.workspace.getActiveTextEditor()
        uniqueLines(editor)
      'sort-lines:case-insensitive-sort': ->
        editor = atom.workspace.getActiveTextEditor()
        sortLinesInsensitive(editor)
      'sort-lines:natural': ->
        editor = atom.workspace.getActiveTextEditor()
        sortLinesNatural(editor)

sortTextLines = (editor, sorter) ->
  sortableRanges = RangeFinder.rangesFor(editor)
  sortableRanges.forEach (range) ->
    textLines = editor.getTextInBufferRange(range).split(/\r?\n/g)
    textLines = sorter(textLines)
    editor.setTextInBufferRange(range, textLines.join("\n"))

sortLines = (editor) ->
  sortTextLines editor, (textLines) ->
    textLines.sort (a, b) -> a.localeCompare(b)

sortLinesReversed = (editor) ->
  sortTextLines editor, (textLines) ->
    textLines.sort (a, b) -> b.localeCompare(a)

uniqueLines = (editor) ->
  sortTextLines editor, (textLines) ->
    Array.from(new Set(textLines))

sortLinesInsensitive = (editor) ->
  sortTextLines editor, (textLines) ->
    textLines.sort (a, b) -> a.toLowerCase().localeCompare(b.toLowerCase())

sortLinesNatural = (editor) ->
  sortTextLines editor, (textLines) ->
    textLines.sort naturalSort
