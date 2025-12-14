All notable changes to this project will be documented in this file.

The format is inspired by *Keep a Changelog* and follows basic semantic versioning.

---

## [1.0.0] – Initial Working Version
### Added
- Highlight selected text on standard web pages (Wikipedia, articles, blogs)
- Save selected text to `chrome.storage.local`
- Popup UI to display saved texts
- Manual delete (✕) for individual saved entries
- Scrollable list for multiple saved texts
- Hover effects on buttons
- Comic Sans font styling for a playful, readable UI

### Behavior
- Highlights appear on normal web pages
- Text is saved immediately when **Highlight Selection** is clicked
- Data persists across tab switches, page reloads, and browser restarts
- Saved texts remain until manually deleted

---

## [1.1.0] – SPA & Platform Compatibility
### Fixed
- Saving text from Single Page Applications (SPA) like ChatGPT and Vercel apps
- Reliable content script injection using `chrome.scripting.executeScript`

### Changed
- Disabled visual highlighting on ChatGPT and similar platforms to avoid DOM issues
- Enabled background saving of selected text on all platforms

### Behavior
- ChatGPT / Vercel:
  - Text is saved locally
  - No visual highlighting on the page
- Standard websites:
  - Text is highlighted and saved

---

## [1.2.0] – Global Notes Mode
### Changed
- Removed URL-based filtering in popup
- All saved texts are now shown together across all websites

### Behavior
- Saved texts persist globally
- Switching tabs or pages does not hide previous entries
- Acts like a universal notebook for selected text

---