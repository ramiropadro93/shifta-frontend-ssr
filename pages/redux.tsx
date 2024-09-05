// pages/redux.tsx
import { Provider } from 'react-redux';
import { store } from '../store';
import Counter from '../components/02-redux-components/Counter';
import Users from '../components/02-redux-components/Users';

const ReduxPage: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>POC de Redux</h1>
		<h2>Demostración con un contador</h2>
        <Counter />
		<h2>Demostración con un mock de API</h2>
        <Users />
      </div>
    </Provider>
  );
};

export default ReduxPage;
