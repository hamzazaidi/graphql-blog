import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { User } from '../../model/User';
import { GET_USERS } from '../../queries';
import Spinner from '../Spinner/Spinner';
import './UserList.css';

function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);
  const [userId, setUserId] = useState('');
  function selectUser(value: string) {
    setUserId(value);
  }
  function setSelectedUserClass(id: string) {
    return id === userId ? 'card flex-grow-1 is-selected' : 'card flex-grow-1';
}
  function displayUsers() {
    if (loading) {
      return <div className="card">
        <div className="card-body">
          <Spinner />
        </div>
      </div>
    } else {
      return data.users.map((u: User) => {
        return <div
            className={setSelectedUserClass(u.id)}
            key={u.id}
            onClick={() => selectUser(u.id)}>
          <div className="card-body d-flex flex-row shadow-lg p-3 bg-body rounded">
            <img src={u.avatar} alt="" />
            <div className="card-content">
              <h5 className="card-title">{u.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{u.email}</h6>
              <h6 className="card-subtitle mb-2 text-muted location">
                <img src="/icons/location.svg" />{u.address.city}
              </h6>
            </div>

          </div>
        </div>
      })
    }
  }
  return (
    <div className="container user-list d-flex flex-wrap">
      { displayUsers()}
    </div>
  );
}

export default UserList;
