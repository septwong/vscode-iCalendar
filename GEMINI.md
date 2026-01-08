# Project Overview

This is a Visual Studio Code extension that provides syntax highlighting for the iCalendar (.ics) format. It helps developers and users who work with iCalendar files to easily read and understand the file structure.

The core technologies used are:
- **TextMate grammar (`.tmLanguage.json`)**: For defining the syntax highlighting rules.
- **JSON**: For configuration and snippets.
- **Visual Studio Code Extension API**: The project is structured as a VS Code extension.

# Building and Running

This project is a VS Code extension. To run it, you need to:

1.  Open this project in Visual Studio Code.
2.  Press `F5` to open a new Extension Development Host window that runs the extension.
3.  Open a `.ics`, `.ical`, `.icalendar`, or `.ifb` file to see the syntax highlighting in action.

There are no build steps required for this extension.

# Development Conventions

- **Syntax Highlighting**: The syntax highlighting is defined in `syntaxes/icalendar.tmLanguage.json`. It uses a TextMate grammar to identify different parts of the iCalendar syntax, such as keywords and strings.
- **Language Configuration**: The `language-configuration.json` file defines how the editor should behave with iCalendar files, such as comment styles and bracket pairs.
- **Snippets**: The `snippets/icalendar.json` file contains code snippets for commonly used iCalendar components, such as `VEVENT` and `VALARM`.
- **Contributions**: The project is hosted on GitHub, and contributions are welcome. The `package.json` file contains links to the repository and bug tracker.
