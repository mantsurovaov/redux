import Card from './Card';
import React from "react";

const CardsList = ({ cardsState, onCardClick }) => (
    <div>
        {cardsState.map(card =>
            <Card
                key={card.id}
                {...card}
                onClick={() => onCardClick(card.id)}
            />
        )}
    </div>
);

export default CardsList;
