
# Article Highlighter + Summarizer

A Chrome Extension that lets users highlight important text on articles, save clippings per page, and generate summaries.

## Features Implemented
- Highlight selected text on any webpage
- Persist highlights using chrome.storage.local
- Popup UI to view saved clippings per URL
- Clean, user-friendly UI using a soft pastel theme
- MV3 compliant extension structure

## Screenshots
### v1 – Initial Working UI

<img width="1228" height="636" alt="Screenshot 2025-12-14 153536" src="https://github.com/user-attachments/assets/ca8a45d5-4447-48d4-bbb6-010257c4fdcf" />

> Features, UI, and behavior may change as the extension evolves.


## UI / UX Design
- **Fonts**: Poppins (headings), Inter (body)
- **Theme**: Calm, readable pastel palette (inspired by provided theme)
- **Layout**: Minimal, distraction-free popup

## What’s Left To Do
- Serverless summarization API (Vercel / Cloud Function)
- Secure API key handling
- Readability.js integration for article extraction
- Export / copy highlights
- Inline translation (optional)
- Sync support and offline summarization fallback

## Tech Stack
- Vanilla JS (can be upgraded to TypeScript + React)
- Chrome Extension MV3
- chrome.storage.local

## Installation
1. Clone the repo
2. Open `chrome://extensions`
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select this folder

## Future Roadmap
- Replace popup with React + Vite
- Add side panel UI
- Deploy summarization endpoint
- Polish animations & accessibility

---
Made for learning content scripts, messaging, storage, and secure API integration.
