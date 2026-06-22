const params = new URLSearchParams(window.location.search);
const symbol = params.get("symbol");

async function loadProfile() {
  companyView.showProfileLoading();
  try {
    const profile = await getCompanyProfile(symbol);
    companyModel.setProfile(profile);
    companyView.hideProfileLoading();
    companyView.renderProfile(companyModel.getProfile());
  } catch (e) {
    companyView.showError("Failed to load company data. Please try again.");
  }
}

async function loadChart() {
  companyView.showChartLoading();
  try {
    const history = await getStockHistory(symbol);
    companyModel.setHistory(history);
    companyView.hideChartLoading();
    companyView.renderChart(companyModel.getHistory());
  } catch (e) {
    companyView.showChartUnavailable();
  }
}

loadProfile();
loadChart();
