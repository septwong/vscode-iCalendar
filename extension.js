const vscode = require('vscode');
const icalParser = require('node-ical');
const ical = require('ical-generator');

function activate(context) {
    context.subscriptions.push(
        vscode.languages.registerDocumentFormattingEditProvider('icalendar', {
            provideDocumentFormattingEdits(document) {
                const text = document.getText();
                try {
                    const parsedCal = icalParser.sync.parseICS(text);
                    const newCal = ical.default({
                        prodId: '//superman-industries.com//ical-generator//EN',
                    });

                    for (const key in parsedCal) {
                        if (parsedCal.hasOwnProperty(key)) {
                            const event = parsedCal[key];
                            if (event.type === 'VEVENT') {
                                newCal.createEvent({
                                    start: event.start,
                                    end: event.end,
                                    summary: event.summary,
                                    description: event.description,
                                    location: event.location,
                                    organizer: event.organizer,
                                    url: event.url,
                                });
                            }
                        }
                    }

                    const formattedText = newCal.toString();
                    const range = new vscode.Range(
                        document.positionAt(0),
                        document.positionAt(text.length)
                    );
                    return [vscode.TextEdit.replace(range, formattedText)];
                } catch (error) {
                    vscode.window.showErrorMessage('Failed to format iCalendar file: ' + error.message);
                    return [];
                }
            }
        })
    );
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
