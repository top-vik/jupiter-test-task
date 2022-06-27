import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import styles from "./Home.module.scss";

const Home = () => {
    let cards = useSelector(state => state.toolkit.cards);

    const categories = {
        showAll: 'Show all',
        design: 'Design',
        branding: 'Branding',
        illustration: 'Illustration',
        motion: 'Motion'
    }
    
    

    //Load more
    const [cardsPerPage, setCardsPerPage] = useState(9);
    const cardsToShow = cards.slice(0, cardsPerPage);
    const loadMore = () => {
        setCardsPerPage(cardsPerPage + cardsPerPage);
    }

    //Filter
    const [ category, setCategory ] = useState(categories.showAll);
    const filteredCards = (cards) => {
        return cards.map((card) => card.category === category &&
                    <Card 
                        card={card} 
                        key={`${card.id}`} 
                        className={styles.card}   
                    />
                )
    }

    return ( 
        <div className={styles.container}>
            <ul className={styles.categories}>
                <li
                    className={styles.categories_item}
                    onClick={() => setCategory(categories.showAll)}
                >
                    {categories.showAll}
                </li>
                <li
                    className={styles.categories_item}
                    onClick={() => setCategory(categories.design)}
                >
                    {categories.design}
                </li>
                <li
                    className={styles.categories_item}
                    onClick={() => setCategory(categories.branding)}
                >
                    {categories.branding}
                </li>
                <li
                    className={styles.categories_item}
                    onClick={() => setCategory(categories.illustration)}
                >
                    {categories.illustration}
                </li>
                <li
                    className={styles.categories_item}
                    onClick={() => setCategory(categories.motion)}
                >
                    {categories.motion}
                </li>
            </ul>
            <div className={styles.cards_container}>
                {category === categories.showAll ? cardsToShow.map((card) => 
                    <Card 
                        card={card} 
                        key={`${card.id}`} 
                        className={styles.card} 
                        categoryHandler={() => setCategory(card.category)}  
                    />
                ) : filteredCards(cardsToShow, category)} 
            </div>
            <button className={styles.loadmore} onClick={() => loadMore()}>Load More</button>
        </div>
    )
}

export default Home;