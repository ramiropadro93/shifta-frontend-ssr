// components/02-redux-components/Users.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchUsers } from '../../features/users/userSlice';

const Users: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, status, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h2>Lista de usuarios</h2>
      {status === 'loading' && <p>Cargando...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
