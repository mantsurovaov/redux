import { connect } from "react-redux";
import CardsList from "./CardsList";

const mapStateToSelectedCardsListProps = (state) => ({
  cardsState: state.cardsState.filter((c) => c.isSelected),
});

const SelectedCardsList = connect(mapStateToSelectedCardsListProps)(CardsList);

export default SelectedCardsList;
