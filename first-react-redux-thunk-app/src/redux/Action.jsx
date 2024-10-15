// actions.js
export const updateRegisterData = (data) => ({
    type: 'UPDATE_REGISTER_DATA',
    payload: data
  });
  
  export const updateContactDetails = (data) => ({
    type: 'UPDATE_CONTACT_DETAILS',
    payload: data
  });
  
  export const submitForm = (combinedData) => {
    console.log("combinedData in submit form : ",combinedData);
    return async (dispatch) => {
      try {
        const response = await fetch('https://api.example.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(combinedData)
        });
  
        const data = await response.json();
        dispatch({ type: 'SUBMIT_FORM_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'SUBMIT_FORM_FAILURE', payload: error.message });
      }
    };
  };
  