import {useState, useEffect} from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    <Container className="mt-4">
      <h1 className="text-center mb-4">CRUD con React</h1>
      <Row>
        <Col md={6}>
          <UserForm onSubmit={editingUser ? updateUser : addUser} user={editingUser} />
        </Col>
        <Col md={6}>
          <UserList users={users} onEdit={setEditingUser} onDelete={deleteUser} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;