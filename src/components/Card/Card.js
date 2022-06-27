import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { remove, activate } from '../../reducers/cardsSlice';
import styles from './Card.module.scss';

const Card = ({card, categoryHandler}) => {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
    
    const activeToggle = () => {    
        setIsActive(!isActive);
        dispatch(activate(card.id));
    }

    //Удаление карточки
    const deleteHandler = (event, id) => {
        if (event.key === 'Delete' && isActive) {
            dispatch(remove(id));
        }
    }

    return (
        <div 
            key={card.id} 
            className={isActive ? styles.card_picked : styles.card} 
            onClick={() => activeToggle()}
            onKeyDown={(e) => deleteHandler(e, card.id)}
            tabIndex={0}    
        >
            <img src={card.img} alt={card.name} className={styles.card_img}/>
            <button 
                className={styles.category}
                onClick={categoryHandler}
            >
                {card.category}
            </button>
            <p className={styles.card_title}>{card.title}</p>
            <div className={styles.mask}></div>
        </div>
    )
}

export default Card;