const USE_MOCK = true;
const API_KEY = "8Ag9lsABg1IfKSG2Rt3kjfnRNWB4cNtE";

async function searchStocks(query) {
  if (USE_MOCK) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(MOCK_RESULTS), 700),
    );
  }
  const url = `https://financialmodelingprep.com/stable/search-symbol?query=${encodeURIComponent(query)}&limit=10&exchange=NASDAQ&apikey=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
}

async function getQuote(symbol) {
  const url = `https://financialmodelingprep.com/stable/quote?symbol=${symbol}&apikey=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();
    return data[0] ?? null;
  } catch {
    return null;
  }
}

async function enrichResults(results) {
  if (USE_MOCK) return results;
  const quotes = await Promise.all(results.map((r) => getQuote(r.symbol)));
  return results.map((item, i) => ({
    ...item,
    image: `https://images.financialmodelingprep.com/symbol/${item.symbol}.png`,
    changePercentage: quotes[i]?.changePercentage ?? null,
  }));
}

async function getCompanyProfile(symbol) {
  if (USE_MOCK) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(MOCK_COMPANY_PROFILE), 700),
    );
  }
  const url = `https://financialmodelingprep.com/stable/profile?symbol=${symbol}&apikey=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  const data = await response.json();
  return data[0];
}

async function getStockHistory(symbol) {
  if (USE_MOCK) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(MOCK_STOCK_HISTORY), 700),
    );
  }
  const url = `https://financialmodelingprep.com/stable/historical-price-eod/light?symbol=${symbol}&limit=30&apikey=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
}
