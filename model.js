const MOCK_RESULTS = [
  { symbol: "AAL",  name: "American Airlines Group Inc.",              exchange: "NASDAQ", image: "https://images.financialmodelingprep.com/symbol/AAL.png",  changePercentage: -1.23 },
  { symbol: "AAEQ", name: "Alpha Architect US Equity 2 ETF",           exchange: "NASDAQ", image: "https://images.financialmodelingprep.com/symbol/AAEQ.png", changePercentage:  0.45 },
  { symbol: "AAXJ", name: "iShares MSCI All Country Asia ex Japan ETF",exchange: "NASDAQ", image: "https://images.financialmodelingprep.com/symbol/AAXJ.png", changePercentage:  0.87 },
  { symbol: "AAOI", name: "Applied Optoelectronics, Inc.",             exchange: "NASDAQ", image: "https://images.financialmodelingprep.com/symbol/AAOI.png", changePercentage: -2.34 },
  { symbol: "AAVM", name: "Alpha Architect Global Factor Equity ETF",  exchange: "NASDAQ", image: "https://images.financialmodelingprep.com/symbol/AAVM.png", changePercentage:  0.31 },
  { symbol: "AAPU", name: "Direxion Daily AAPL Bull 2X ETF",           exchange: "NASDAQ", image: "https://images.financialmodelingprep.com/symbol/AAPU.png", changePercentage:  2.18 },
  { symbol: "AALG", name: "Leverage Shares 2x Long AAL Daily ETF",     exchange: "NASDAQ", image: "https://images.financialmodelingprep.com/symbol/AALG.png", changePercentage: -1.56 },
  { symbol: "AAPD", name: "Direxion Daily AAPL Bear 1X ETF",           exchange: "NASDAQ", image: "https://images.financialmodelingprep.com/symbol/AAPD.png", changePercentage: -2.09 },
  { symbol: "AAPL", name: "Apple Inc.",                                 exchange: "NASDAQ", image: "https://images.financialmodelingprep.com/symbol/AAPL.png", changePercentage:  1.09 },
  { symbol: "AAPG", name: "Ascentage Pharma Group International",      exchange: "NASDAQ", image: "https://images.financialmodelingprep.com/symbol/AAPG.png", changePercentage:  3.45 },
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
