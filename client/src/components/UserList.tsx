import { useQuery } from '@apollo/client';
import React from 'react';
import { User } from '../model/User';
import { GET_USERS } from '../queries';

function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);
  function displayUsers() {
    if(loading) {
      return <li>Loading users...</li>
    } else {
      return data.users.map((u: User) => <li key={u.id}>{ u.name }</li>)
    }
  }
  return (
    <div className="UserList">
      { displayUsers() }
    </div>
  );
}

export default UserList;
