
# Article Highlighter + Summarizer

A Chrome Extension that lets users highlight important text on articles, save clippings per page, and generate summaries.

## Features Implemented
- Highlight selected text on any webpage
- Persist highlights using chrome.storage.local
- Popup UI to view saved clippings per URL
- Clean, user-friendly UI using a soft pastel theme
- MV3 compliant extension structure

## Screenshots
<img width="1228" height="636" alt="Screenshot 2025-12-14 153536" src="https://github.com/user-attachments/assets/07e20a24-bddb-4c5c-a116-685d87d89ef6" />
> Screenshots and examples shown in this repository represent the current state of the project and may not reflect the final polished version.

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

Made for learning content scripts, messaging, storage, and secure API integration.
