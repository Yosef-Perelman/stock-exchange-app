const MOCK_RESULTS = [
  { symbol: "AAL", name: "American Airlines Group Inc.", exchange: "NASDAQ" },
  { symbol: "AAEQ", name: "Alpha Architect US Equity 2 ETF", exchange: "NASDAQ" },
  { symbol: "AAXJ", name: "iShares MSCI All Country Asia ex Japan ETF", exchange: "NASDAQ" },
  { symbol: "AAOI", name: "Applied Optoelectronics, Inc.", exchange: "NASDAQ" },
  { symbol: "AAVM", name: "Alpha Architect Global Factor Equity ETF", exchange: "NASDAQ" },
  { symbol: "AAPU", name: "Direxion Daily AAPL Bull 2X ETF", exchange: "NASDAQ" },
  { symbol: "AALG", name: "Leverage Shares 2x Long AAL Daily ETF", exchange: "NASDAQ" },
  { symbol: "AAPD", name: "Direxion Daily AAPL Bear 1X ETF", exchange: "NASDAQ" },
  { symbol: "AAPL", name: "Apple Inc.", exchange: "NASDAQ" },
  { symbol: "AAPG", name: "Ascentage Pharma Group International", exchange: "NASDAQ" },
];

const model = {
  results: [],
  setResults(data) {
    this.results = data;
  },
  getResults() {
    return this.results;
  },
};
