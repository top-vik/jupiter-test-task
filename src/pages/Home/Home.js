import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../reducers/cardsSlice';
import styles from "./Home.module.scss";

const Home = () => {
    const cards = useSelector(state => state.toolkit.cards);
    const dispatch = useDispatch();
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
                {cards.map(card => {
                    return <div key={card.id} className={styles.card}>
                        <img src={card.img} alt={card.name}/>
                        <button onClick={() => dispatch(remove(card.id))}>delete</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Home;