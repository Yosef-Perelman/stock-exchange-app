const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const list = document.getElementById("results");

async function handleSearch() {
  const query = searchInput.value.trim();

  view.showLoading();

  try {
    const data = await searchStocks(query);
    const enriched = await enrichResults(data);
    model.setResults(enriched);
    view.hideLoading();
    view.renderResults(model.getResults());
  } catch (e) {
    view.hideLoading();
    view.showError("Search failed, Please try again.");
  }
}

function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debouncedSearch = debounce(handleSearch, 500);

searchInput.addEventListener("input", () => {
  if (searchInput.value.trim() === "") {
    list.innerHTML = "";
  } else {
    debouncedSearch();
  }
});
