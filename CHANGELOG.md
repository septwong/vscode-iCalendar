# Changelog

All notable changes to this project will be documented in this file.

## [1.0.4] - 2026-07-07

### Added
- Added a basic `.ics` example for manual syntax highlighting checks.

### Changed
- Improved TextMate grammar handling for parameterized properties.
- Added folding support for `STANDARD` and `DAYLIGHT` timezone components.
- Refined package ignore rules to keep local and development-only files out of the extension package.

## [1.0.3] - 2026-01-12

### Changed
- Optimized snippets.
- Optimized tmLanguage.

## [1.0.2] - 2026-01-10

### Changed
- Optimized snippets.

## [1.0.1] - 2026-01-10

### Changed
- Optimized snippets for CN / Asia/Shanghai time zone.
- Simplified VEVENT leveraging VCALENDAR time zone.
- Improved date-time highlighting to distinguish UTC vs local times.
- Added TZID parameter highlighting.

## [1.0.0] - 2026-01-08

### Added
- Initial release with basic iCalendar syntax highlighting.
- Comprehensive syntax highlighting based on RFC 5545.
- Code folding for `BEGIN`/`END` blocks (e.g., `VCALENDAR`, `VEVENT`).
- Detailed scope classification for all standard iCalendar components, properties, and constants.
- Distinct highlighting for custom `X-` properties and property parameters.
