const BASE_URL = `https://api.coinpaprika.com/v1`;

export async function fetchCoins() {
  return await fetch(`${BASE_URL}/coins`).then((res) => res.json());
}

export async function fetchCoinInfo(coinId: string) {
  return await fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
}

export async function fetchCoinTickers(coinId: string) {
  return await fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
}

export async function fetchCoinHistory(coinId: string) {
  const endDate = Math.ceil(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((res) => res.json());
}
