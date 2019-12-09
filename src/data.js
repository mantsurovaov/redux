export const initialState = {
    cardsState: [
        {
            id: 0,
            title: 'Title1',
            price: 990,
            isSelected: false,
        },
        {
            id: 1,
            title: 'Title2',
            price: 390,
            isSelected: false,
        },
        {
            id: 2,
            title: 'Title3',
            price: 200,
            isSelected: false,
        },
        {
            id: 3,
            title: 'Title4',
            price: 800,
            isSelected: false,
        },
        {
            id: 4,
            title: 'Title5',
            price: 550,
            isSelected: false,
        },
        {
            id: 5,
            title: 'Title6',
            price: 120,
            isSelected: false,
        },
    ],
    filtersState: {
        sortBy: 'id',
        startPrice: 0,
        endPrice: 2000,
    },
};

