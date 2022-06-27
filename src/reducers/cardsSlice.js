import { createSlice } from '@reduxjs/toolkit';
import cardsData from '../db/data';

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: cardsData,
        activeCardsIds: [ ]
    },
    reducers: {
        remove(state, action) {
           state.cards = state.cards.filter(card => !state.activeCardsIds.includes(card.id));
        },
        activate(state, action) {
            if(!state.activeCardsIds.includes(action.payload)) {
                state.activeCardsIds = [...state.activeCardsIds, action.payload]
            } else {
                return state
            }
        }
    }
})

export default cardsSlice.reducer;
export const { remove, activate } = cardsSlice.actions;