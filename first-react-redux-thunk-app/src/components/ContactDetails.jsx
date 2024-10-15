import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContactDetails } from '../redux/Action'; // Correct import

const ContactDetails = () => {
  const [formData, setFormData] = useState({ email: '', phone: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    dispatch(updateContactDetails(formData));
    console.log("contact Details : ",formData);
  };

  return (
    <div>
      <h2>Contact Details</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <button onClick={handleSave}>Save Contact Details</button>
    </div>
  );
};

export default ContactDetails;
