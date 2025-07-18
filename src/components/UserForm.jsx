import { useState, useEffect } from 'react';

function UserForm({ onSubmit, user }) {
  const [form, setForm] = useState({ name: '', email: '' });

  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    onSubmit(form);
    setForm({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nombre" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
      <button type="submit">{user ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}

export default UserForm;
