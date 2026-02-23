const STOCK_KEY = "stocks";

const DEFAULT_STOCKS = {
  1: { stock: 10 },
  2: { stock: 5 },
  3: { stock: 8 },
  4: { stock: 3 },
  5: { stock: 9 },
  6: { stock: 2 },
  7: { stock: 1 },
  8: { stock: 10 }
};

function initStock() {
  const current = JSON.parse(localStorage.getItem(STOCK_KEY)) || {};

  Object.keys(DEFAULT_STOCKS).forEach(id => {
    if (!current[id]) {
      current[id] = DEFAULT_STOCKS[id];
    }
  });

  localStorage.setItem(STOCK_KEY, JSON.stringify(current));
}

function getStocks() {
  return JSON.parse(localStorage.getItem(STOCK_KEY)) || {};
}

function saveStocks(stocks) {
  localStorage.setItem(STOCK_KEY, JSON.stringify(stocks));
}

initStock();
