let priceChart = null;

const companyView = {
  showProfileLoading() {
    document.getElementById("profile-loading").classList.remove("hidden");
    document.getElementById("company-profile").classList.add("hidden");
  },

  hideProfileLoading() {
    document.getElementById("profile-loading").classList.add("hidden");
    document.getElementById("company-profile").classList.remove("hidden");
  },

  showChartLoading() {
    document.getElementById("chart-loading").classList.remove("hidden");
    document.getElementById("chart-container").classList.add("hidden");
  },

  hideChartLoading() {
    document.getElementById("chart-loading").classList.add("hidden");
    document.getElementById("chart-container").classList.remove("hidden");
  },

  renderProfile(profile) {
    const logo = document.getElementById("company-logo");
    logo.src = profile.image;
    logo.alt = profile.companyName;

    document.getElementById("company-name").textContent = profile.companyName;

    const websiteEl = document.getElementById("company-website");
    websiteEl.href = profile.website;
    websiteEl.textContent = profile.website;

    document.getElementById("company-description").textContent =
      profile.description;

    document.getElementById("company-price").textContent =
      `$${profile.price.toFixed(2)}`;

    const changeEl = document.getElementById("company-change");
    const isPositive = profile.changePercentage >= 0;
    changeEl.textContent = `${isPositive ? "+" : ""}${profile.changePercentage.toFixed(2)}%`;
    changeEl.className = `company-change ${isPositive ? "positive" : "negative"}`;
  },

  renderChart(history) {
    const sorted = [...history].reverse();
    const labels = sorted.map((d) => d.date);
    const prices = sorted.map((d) => d.close);

    if (priceChart) {
      priceChart.destroy();
    }

    const canvas = document.getElementById("price-chart");
    priceChart = new Chart(canvas, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            data: prices,
            borderColor: "#58a6ff",
            backgroundColor: "rgba(88, 166, 255, 0.08)",
            fill: true,
            tension: 0.3,
            pointRadius: 0,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#161b22",
            borderColor: "#30363d",
            borderWidth: 1,
            titleColor: "#e6edf3",
            bodyColor: "#8b949e",
            callbacks: {
              label: (ctx) => `$${ctx.parsed.y.toFixed(2)}`,
            },
          },
        },
        scales: {
          x: {
            grid: { color: "#30363d" },
            ticks: { color: "#8b949e", maxTicksLimit: 6, font: { size: 11 } },
          },
          y: {
            grid: { color: "#30363d" },
            ticks: {
              color: "#8b949e",
              font: { size: 11 },
              callback: (v) => `$${v}`,
            },
          },
        },
      },
    });
  },

  showError(message) {
    document.getElementById("profile-loading").classList.add("hidden");
    document.getElementById("chart-loading").classList.add("hidden");
    const el = document.getElementById("page-error");
    el.textContent = message;
    el.classList.remove("hidden");
  },
};
