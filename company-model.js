const MOCK_COMPANY_PROFILE = {
  symbol: "AAPL",
  price: 298.01,
  change: 2.06,
  changePercentage: 0.69606,
  companyName: "Apple Inc.",
  description:
    "Apple Inc. is a global technology corporation that specializes in the conceptualization, production, and sale of a diverse suite of electronic devices. Its comprehensive hardware lineup features the well-known iPhone smartphones, Mac personal computers, and versatile iPad tablets. The company also supplies a range of wearables, smart home products, and accessories, including AirPods, Apple TV, Apple Watch, items from the Beats brand, and HomePod speakers. Beyond its device offerings, Apple delivers essential support services like AppleCare and robust cloud solutions. It oversees key digital platforms, prominently the App Store, which acts as a central hub for customers to discover and download countless applications and digital content.",
  website: "https://www.apple.com",
  image: "https://images.financialmodelingprep.com/symbol/AAPL.png",
  exchange: "NASDAQ",
  industry: "Consumer Electronics",
  sector: "Technology",
};

const MOCK_STOCK_HISTORY = [
  { date: "2026-06-18", close: 298.01 },
  { date: "2026-06-17", close: 295.95 },
  { date: "2026-06-16", close: 299.24 },
  { date: "2026-06-15", close: 296.42 },
  { date: "2026-06-12", close: 291.13 },
  { date: "2026-06-11", close: 295.63 },
  { date: "2026-06-10", close: 291.58 },
  { date: "2026-06-09", close: 290.55 },
  { date: "2026-06-08", close: 301.54 },
  { date: "2026-06-05", close: 307.34 },
  { date: "2026-06-04", close: 311.23 },
  { date: "2026-06-03", close: 310.26 },
  { date: "2026-06-02", close: 315.20 },
  { date: "2026-06-01", close: 306.31 },
  { date: "2026-05-29", close: 312.06 },
  { date: "2026-05-28", close: 312.51 },
  { date: "2026-05-27", close: 310.85 },
  { date: "2026-05-26", close: 308.33 },
  { date: "2026-05-22", close: 308.82 },
  { date: "2026-05-21", close: 304.99 },
  { date: "2026-05-20", close: 302.25 },
  { date: "2026-05-19", close: 298.97 },
  { date: "2026-05-18", close: 297.84 },
  { date: "2026-05-15", close: 300.23 },
  { date: "2026-05-14", close: 298.21 },
];

const companyModel = {
  profile: null,
  history: [],
  setProfile(data) {
    this.profile = data;
  },
  getProfile() {
    return this.profile;
  },
  setHistory(data) {
    this.history = data;
  },
  getHistory() {
    return this.history;
  },
};
