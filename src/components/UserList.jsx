function UserList({ users, onEdit, onDelete }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
          <button onClick={() => onEdit(user)}>Editar</button>
          <button onClick={() => onDelete(user.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
