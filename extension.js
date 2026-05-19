const vscode = require('vscode');

function activate(context) {
  const provider = {
    provideFoldingRanges(document) {
      const ranges = [];
      const stack = [];
      const beginRe = /^BEGIN:([A-Z0-9-]+)/i;
      const endRe = /^END:([A-Z0-9-]+)/i;

      for (let i = 0; i < document.lineCount; i++) {
        const line = document.lineAt(i).text;
        const mBegin = line.match(beginRe);
        if (mBegin) {
          stack.push({ name: mBegin[1].toUpperCase(), line: i });
          continue;
        }

        const mEnd = line.match(endRe);
        if (mEnd) {
          const name = mEnd[1].toUpperCase();
          for (let j = stack.length - 1; j >= 0; j--) {
            if (stack[j].name === name) {
              const startLine = stack[j].line;
              const endLine = i;
              const foldEnd = Math.max(startLine, endLine - 1);
              ranges.push(new vscode.FoldingRange(startLine, foldEnd, vscode.FoldingRangeKind.Region));
              stack.splice(j, 1);
              break;
            }
          }
        }
      }

      return ranges;
    }
  };

  context.subscriptions.push(
    vscode.languages.registerFoldingRangeProvider({ language: 'icalendar' }, provider)
  );
}

function deactivate() {}

module.exports = { activate, deactivate };