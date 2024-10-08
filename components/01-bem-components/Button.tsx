import React from 'react';
import styles from '@/styles/main.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    icon?: React.ReactNode;
}

const Button = ({
    children,
    variant = 'primary',
    icon,
}: ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[`button--${variant}`]}`}>
            {icon && <span className={styles['button__icon']}>{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
