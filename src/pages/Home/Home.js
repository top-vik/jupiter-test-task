import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card/Card';
import { remove } from '../../reducers/cardsSlice';
import styles from "./Home.module.scss";

const Home = () => {
    const cards = useSelector(state => state.toolkit.cards);
    const dispatch = useDispatch();
    const clickHandler = (id) => {
        dispatch(remove(id));
    }
    return ( 
        <div className={styles.container}>
            <ul className={styles.categories}>
                <li className={styles.categories_item}>Show all</li>
                <li className={styles.categories_item}>Design</li>
                <li className={styles.categories_item}>Branding</li>
                <li className={styles.categories_item}>Illustration</li>
                <li className={styles.categories_item}>Motion</li>
            </ul>
            <div className={styles.cards_container}>
                {cards.map((card, index) => 
                    <Card 
                        card={card} 
                        key={`${card.id}`} 
                        className={styles.card}
                        clickHandler={() => clickHandler(card.id)}    
                    />
                )}
            </div>
            <button className={styles.loadmore}>Load more</button>
        </div>
    )
}

export default Home;