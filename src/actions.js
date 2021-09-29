export const selectCard = (id) => ({
  type: "SELECT_CARD",
  id,
});

export const startPrice = (startPrice) => ({
  type: "START_PRICE",
  startPrice,
});

export const endPrice = (endPrice) => ({
  type: "END_PRICE",
  endPrice,
});

export const sortBy = (sortType) => ({
  type: "SORT_BY",
  sortType,
});
