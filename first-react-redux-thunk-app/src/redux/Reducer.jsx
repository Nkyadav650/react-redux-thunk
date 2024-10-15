// reducers.js
const initialState = {
    registerData: {},
    contactDetails: {},
    submissionStatus: null,
    error: null
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_REGISTER_DATA':
        return { ...state, registerData: action.payload };
      case 'UPDATE_CONTACT_DETAILS':
        return { ...state, contactDetails: action.payload };
      case 'SUBMIT_FORM_SUCCESS':
        return { ...state, submissionStatus: 'success', error: null };
      case 'SUBMIT_FORM_FAILURE':
        return { ...state, submissionStatus: 'failure', error: action.payload };
      default:
        return state;
    }
  };
  
  export default formReducer;
  