import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from './reduxFunctions';
import {initialState} from './data';
import {cardsReducer} from './reducers/cardsReducer';
import {filtersReducer} from "./reducers/filterReducer";
import CardsApp from "./App";

export const rootReducer = combineReducers({
    cardsState: cardsReducer,
    filterState: filtersReducer,
});

ReactDOM.render(
    <Provider store={createStore(rootReducer, initialState)}>
        <CardsApp />
    </Provider>,
    document.getElementById('root')
);
