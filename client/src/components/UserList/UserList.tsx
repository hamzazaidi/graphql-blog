import { useQuery } from '@apollo/client';
import React from 'react';
import { User } from '../../model/User';
import { GET_USERS } from '../../queries';
import './UserList.css';
function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);
  function displayUsers() {
    if(loading) {
      return <li>Loading users...</li>
    } else {
      return data.users.map((u: User) => {
        return <li key={u.id}>
          <div className="card">
            <div className="card-body">
              { u.name }
            </div>
          </div>
        </li>
      })
    }
  }
  return (
    <div className="UserList">
      <ul>{ displayUsers() }</ul>
    </div>
  );
}

export default UserList;
