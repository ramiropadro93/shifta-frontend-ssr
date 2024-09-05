import React from 'react';
import Button from '../components/01-bem-components/Button';
import Card from '../components/01-bem-components/Card';

const HomePage: React.FC = () => {
    return (
        <div className='container'>
            <Button variant="primary" icon={<span>👍</span>}>
                Esto es un botón
            </Button>
            <Button variant="secondary">Esto es otro botón</Button>
            <Card
                title="Esto es una card"
                content="Y esto es el cuerpo de una card"
                highlighted
            />
        </div>
    );
};

export default HomePage;
