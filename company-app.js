const params = new URLSearchParams(window.location.search);
const symbol = params.get("symbol");

async function loadCompanyPage() {
  companyView.showProfileLoading();
  companyView.showChartLoading();

  try {
    const [profile, history] = await Promise.all([
      getCompanyProfile(symbol),
      getStockHistory(symbol),
    ]);

    companyModel.setProfile(profile);
    companyModel.setHistory(history);

    companyView.hideProfileLoading();
    companyView.renderProfile(companyModel.getProfile());

    companyView.hideChartLoading();
    companyView.renderChart(companyModel.getHistory());
  } catch (e) {
    companyView.showError("Failed to load company data. Please try again.");
  }
}

loadCompanyPage();
