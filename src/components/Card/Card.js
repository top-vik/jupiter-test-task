import styles from './Card.module.scss';

const Card = ({card, clickHandler}) => {
    return (
        <div key={card.id} className={styles.card}>
            <img src={card.img} alt={card.name} className={styles.card_img}/>
            <button className={styles.category}>{card.category}</button>
            <p className={styles.card_title}>{card.title}</p>
            <button onClick={clickHandler}>delete</button>
            <div className={styles.mask}></div>
        </div>
    )
}

export default Card;