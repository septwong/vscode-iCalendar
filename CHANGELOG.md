# Changelog

All notable changes to this project will be documented in this file.

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
