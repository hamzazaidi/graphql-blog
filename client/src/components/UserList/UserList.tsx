import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { User } from '../../model/User';
import { GET_USERS } from '../../queries';
import Spinner from '../Spinner/Spinner';
import './UserList.css';

function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);
  const [userId, setUserId] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false); 
    setUserId('');
  }
  
  function selectUser(value: string) {
    setUserId(value);
    setShow(true);
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserList;
