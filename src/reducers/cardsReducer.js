export const cardReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_CARD":
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        isSelected: !state.isSelected,
      };
    default:
      return state;
  }
};

export const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECT_CARD":
      return state.map((c) => cardReducer(c, action));
    case "SHOW_ALL":
      return state;
    case "SHOW_SELECTED":
      return state.filter((c) => c.isSelected);
    default:
      return state;
  }
};
