# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Quick Commands

```bash
# Run extension in Extension Development Host
# Open project in VSCode and press F5

# Package the extension
vsce package
```

## Project Structure

This is a VS Code syntax highlighting extension for iCalendar (.ics, .ical, .ifb) files based on RFC 5545.

- **`syntaxes/icalendar.tmLanguage.json`** - TextMate grammar defining syntax highlighting rules
- **`snippets/icalendar.json`** - Code snippets for common iCalendar components
- **`language-configuration.json`** - Editor behavior settings for iCalendar files
- **`package.json`** - Extension manifest with language registration

## Architecture

The extension uses declarative TextMate grammar to provide:
- Syntax highlighting for iCalendar components (VCALENDAR, VEVENT, VTIMEZONE, etc.)
- Code folding for BEGIN/END blocks
- Snippets for quick event/timezone/alarm creation

No build process required - changes to JSON files take effect immediately when running in Extension Development Host (F5).
