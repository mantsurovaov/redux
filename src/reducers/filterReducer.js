export const filtersReducer = (state={
    sortBy: 'id',
    startPrice: 0,
    endPrice: 2000
}, action) => {
    switch(action.type) {
        case 'START_PRICE':
            return {
                ...state,
                startPrice: action.startPrice,
            };
        case 'END_PRICE':
            return {
                ...state,
                endPrice: action.endPrice,
            };
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortType,
            };
        default:
            return state;
    }
};
