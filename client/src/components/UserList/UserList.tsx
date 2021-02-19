import { useQuery } from '@apollo/client';
import React from 'react';
import { User } from '../../model/User';
import { GET_USERS } from '../../queries';
import Spinner from '../Spinner/Spinner';
import './UserList.css';
function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);
  function displayUsers() {
    if (loading) {
      return <div className="card">
        <div className="card-body">
          <Spinner />
        </div>
      </div>
    } else {
      return data.users.map((u: User) => {
        return <div className="card" key={u.id}>
          <div className="card-body d-flex flex-row">
            <img src={u.avatar} alt="" />
            <h5 className="card-title">{u.name}</h5>            
          </div>
        </div>
      })
    }
  }
  return (
    <div className="user-list">
      { displayUsers()}
    </div>
  );
}

export default UserList;
