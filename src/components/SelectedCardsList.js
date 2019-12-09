import {connect} from "react-redux";
import CardsList from "./CardsList";

const mapStateToSelectedCardsListProps = (state) => {
    return {
        cardsState: state.cardsState.filter(c => c.isSelected)
    }
};
const SelectedCardsList = connect(
    mapStateToSelectedCardsListProps
)(CardsList);

export default SelectedCardsList;
