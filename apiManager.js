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
  const url = `https://financialmodelingprep.com/stable/historical-price-eod/full?symbol=${symbol}&limit=30&apikey=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json();
}
