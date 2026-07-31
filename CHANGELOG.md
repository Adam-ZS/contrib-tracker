# Changelog

All notable changes to this project will be documented in this file.

## [0.3.0] - 2026-07-31

### Added
- Export button for stats JSON (download raw stats snapshot)
- `updateStats` helper with streak rollover handling

### Fixed
- Streak reset when crossing a month boundary
- Null value handling in the language breakdown

## [0.2.0] - 2026-07-20

### Added
- Initial stats dashboard module (`public/stats.js`) with total/monthly counters and language split
