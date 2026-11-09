# Stock Exchange App

A vanilla JavaScript stock search app built during the TechTroop / Elevation Full Stack bootcamp.

## Features

- **Live search** – search companies by name or symbol, with a debounced input (500 ms) to avoid extra API calls.
- **Enriched results** – each result is enriched with its current quote.
- **Company page** – company profile and a price-history chart (Chart.js).
- **Loading and error states** in the UI.

## Structure

The app follows an MVC-style separation in plain JavaScript:

| File | Role |
|---|---|
| `apiManager.js` | All calls to the Financial Modeling Prep API (search, quote, profile, price history) |
| `model.js` / `company-model.js` | Application state |
| `view.js` / `company-view.js` | DOM rendering |
| `app.js` / `company-app.js` | Controllers – wire events, API and views |

Styling uses Tailwind CSS (CDN).

## Running locally

1. Copy `config.example.js` to `config.js` and put your [Financial Modeling Prep](https://site.financialmodelingprep.com/) API key in it (`config.js` is git-ignored).
2. In `apiManager.js`, set `USE_MOCK = false` to use the real API (it uses mock data by default).
3. Open `index.html` in the browser, or serve the folder with any static server.
