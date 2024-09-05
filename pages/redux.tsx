// pages/redux.tsx
import { Provider } from 'react-redux';
import { store } from '../store';
import Counter from '../components/02-redux-components/Counter';
import Users from '../components/02-redux-components/Users';

const ReduxPage: React.FC = () => {
    return (
        <Provider store={store}>
            <div className='container flex flex-col gap-3'>
                <h1 className='text-xl font-bold'>POC de Redux</h1>
                <h2 className='text-lg font-bold'>Demostración con un contador</h2>
                <Counter />
                <hr className="border-gray-300 my-4" />

                <h2 className='text-lg font-bold'>Demostración con un mock de API</h2>
                <Users />
            </div>
        </Provider>
    );
};

export default ReduxPage;
