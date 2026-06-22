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
