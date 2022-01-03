export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const TopGainers = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const TrendingCoins = () =>
  `https://api.coingecko.com/api/v3/search/trending`;

export const RetreivePrice = (id, currency) =>
  `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${currency}&include_24hr_change=true`;
