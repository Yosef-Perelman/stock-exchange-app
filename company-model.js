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
  { date: "2026-06-18", price: 298.01 },
  { date: "2026-06-17", price: 295.95 },
  { date: "2026-06-16", price: 299.24 },
  { date: "2026-06-15", price: 296.42 },
  { date: "2026-06-12", price: 291.13 },
  { date: "2026-06-11", price: 295.63 },
  { date: "2026-06-10", price: 291.58 },
  { date: "2026-06-09", price: 290.55 },
  { date: "2026-06-08", price: 301.54 },
  { date: "2026-06-05", price: 307.34 },
  { date: "2026-06-04", price: 311.23 },
  { date: "2026-06-03", price: 310.26 },
  { date: "2026-06-02", price: 315.20 },
  { date: "2026-06-01", price: 306.31 },
  { date: "2026-05-29", price: 312.06 },
  { date: "2026-05-28", price: 312.51 },
  { date: "2026-05-27", price: 310.85 },
  { date: "2026-05-26", price: 308.33 },
  { date: "2026-05-22", price: 308.82 },
  { date: "2026-05-21", price: 304.99 },
  { date: "2026-05-20", price: 302.25 },
  { date: "2026-05-19", price: 298.97 },
  { date: "2026-05-18", price: 297.84 },
  { date: "2026-05-15", price: 300.23 },
  { date: "2026-05-14", price: 298.21 },
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
