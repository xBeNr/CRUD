import { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const API_URL = 'http://localhost:3001/usuarios';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get(API_URL);
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async (user) => {
    await axios.post(API_URL, user);
    fetchUsers();
  };

  const updateUser = async (user) => {
    await axios.put(`${API_URL}/${user.id}`, user);
    setEditingUser(null);
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchUsers();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>CRUD con React + Vite</h1>
      <UserForm onSubmit={editingUser ? updateUser : addUser} user={editingUser} />
      <UserList users={users} onEdit={setEditingUser} onDelete={deleteUser} />
    </div>
  );
}

export default App;
