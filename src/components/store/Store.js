import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../slice/AuthSlice';
import editedReducer from '../slice/EditedSlice';

const Store = configureStore({
  reducer: {
    auth: authReducer,
    edit: editedReducer,
  },
});

export default Store;
