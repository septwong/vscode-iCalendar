# iCalendar Syntax

<p align="center">
    <span> English</span>
    ·
    <a href="https://github.com/septwong/vscode-iCalendar/blob/main/README_zh-cn.md"> 简体中文</a>
</p>

iCalendar for VS Code

Provides comprehensive iCalendar (`.ics`, `.ical`, `.ifb`) syntax highlighting for Visual Studio Code, based on [RFC 5545](https://tools.ietf.org/html/rfc5545).

## Features

- **Full Syntax Highlighting**: Accurately highlights all standard iCalendar components, properties, constants, and parameters.
- **Code Folding**: Easily collapse and expand `BEGIN`/`END` blocks for major components like `VCALENDAR`, `VEVENT`, `VTODO`, and `VTIMEZONE`.
- **RFC 5545 Compliant**: Based on the official iCalendar specification for maximum accuracy.
- **Timezone-Friendly**: Default optimized for CN / Asia/Shanghai users; VEVENT components automatically inherit the calendar timezone.
- **Date-Time Distinction**: Highlights UTC times and local times separately for clearer readability.
- **Parameter Highlighting**: `TZID` and other parameter values are highlighted to improve clarity.
- **Distinct Scopes**: Provides clear and distinct styling for keywords, properties, parameters, values, and custom `X-` properties.

<!-- Screenshot example (optional) -->
<!-- ![screenshot](https://raw.githubusercontent.com/septwong/vscode-iCalendar/main/assets/md_images/screenshot.png) -->

## Resources

- [iCalendar Marketplace Page](https://marketplace.visualstudio.com/items?itemName=af4jm.vscode-icalendar)