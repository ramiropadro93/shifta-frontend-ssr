import React from 'react';
import styles from '@/styles/main.module.scss';

interface CardProps {
    title: string;
    content: string;
    highlighted?: boolean;
}

const Card: React.FC<CardProps> = ({ title, content, highlighted = false }) => {
    return (
        <div
            className={`${styles.card} ${
                highlighted ? styles['card--highlighted'] : ''
            }`}
        >
            <h2 className={styles['card__title']}>{title}</h2>
            <p className={styles['card__content']}>{content}</p>
        </div>
    );
};

export default Card;
