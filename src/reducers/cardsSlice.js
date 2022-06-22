import { createSlice } from '@reduxjs/toolkit';


const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: [
            {
                id: 1,
                title: 'SOFA',
                category: 'Design',
                img: '/images//sofa.png'
            },
            {
                id: 2,
                title: 'KeyBoard',
                category: 'Branding',
                img: '/images//keyboard.png'
            },
            {
                id: 3,
                title: 'Work Media',
                category: 'Illustration',
                img: '/images//workmedia.png'
            },
            {
                id: 4,
                title: 'DDDone',
                category: 'Motion',
                img: '/images//dddone.png'
            },
            {
                id: 5,
                title: 'Abstract',
                category: 'Design',
                img: '/images//abstract.png'
            }
        ],
    },
    reducers: {
        remove(state, action) {
           state.cards = state.cards.filter(card => card.id !== action.payload)
        }
    }
})

export default cardsSlice.reducer;
export const { remove } = cardsSlice.actions;