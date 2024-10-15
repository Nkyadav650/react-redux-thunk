// store.js
import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../redux/Reducer'; // Root reducer

const store = configureStore({
  reducer: {
    formReducer: formReducer, // Add your reducers here
  },
  // Redux Toolkit includes thunk by default, so no need to add it manually
});

export default store;
