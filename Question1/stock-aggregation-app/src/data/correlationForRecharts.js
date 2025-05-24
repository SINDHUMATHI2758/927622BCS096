export const tickers = ["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA"];

export const rechartsData = [];

tickers.forEach((rowTicker, i) => {
  tickers.forEach((colTicker, j) => {
    const correlation = [1, 0.87, 0.89, 0.8, 0.75][Math.abs(i - j)] || 0.6;
    rechartsData.push({
      x: rowTicker,
      y: colTicker,
      value:
        i === j
          ? 1
          : parseFloat((correlation - 0.05 * Math.abs(i - j)).toFixed(2)),
    });
  });
});
