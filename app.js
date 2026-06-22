const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

async function handleSearch() {
  const query = searchInput.value.trim();
  if (!query) return;

  view.setButtonLoading(true);
  view.showLoading();

  try {
    const data = await searchStocks(query);
    model.setResults(data);
    view.hideLoading();
    view.renderResults(model.getResults());
  } catch (e) {
    view.hideLoading();
    view.showError("Search failed. Please try again.");
  } finally {
    view.setButtonLoading(false);
  }
}

searchButton.addEventListener("click", handleSearch);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSearch();
});