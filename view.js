const view = {
  showLoading() {
    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("results").innerHTML = "";
    document.getElementById("error").classList.add("hidden");
  },

  hideLoading() {
    document.getElementById("loading").classList.add("hidden");
  },

  renderResults(results) {
    const list = document.getElementById("results");
    if (results.length === 0) {
      list.innerHTML = `<li class="no-results">No results found</li>`;
      return;
    }
    list.innerHTML = results
      .map(
        (item) => `
        <li>
          <a href="/company.html?symbol=${item.symbol}" class="result-link" target="_blank" rel="noopener noreferrer">
            <span class="result-name">${item.name}</span>
            <span class="result-symbol">${item.symbol}</span>
          </a>
        </li>`
      )
      .join("");
  },

  showError(message) {
    const el = document.getElementById("error");
    el.textContent = message;
    el.classList.remove("hidden");
  },

  setButtonLoading(isLoading) {
    const btn = document.getElementById("searchButton");
    btn.disabled = isLoading;
    btn.textContent = isLoading ? "Searching..." : "Search";
  },
};
