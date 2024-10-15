import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitForm } from '../redux/Action';

const SubmitForm = () => {
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.formReducer.registerData);
  const contactDetails = useSelector((state) => state.formReducer.contactDetails);

  const handleSubmit = () => {
    const combinedData = { ...registerData, ...contactDetails };
    console.log("combinedData: ",combinedData);
    dispatch(submitForm(combinedData));

  };

  return (
    <div>
      <h2>Submit Form</h2>
      <button onClick={handleSubmit}>Submit All Data</button>
    </div>
  );
};

export default SubmitForm;
