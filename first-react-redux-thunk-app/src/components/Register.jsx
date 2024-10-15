import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateRegisterData } from '../redux/Action'; // Correct import

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    dispatch(updateRegisterData(formData));
    console.log("register form : ",formData);
    
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Save Register Data</button>
    </div>
  );
};

export default Register;
