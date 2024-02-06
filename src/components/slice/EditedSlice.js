import { createSlice } from '@reduxjs/toolkit';
const EditedSlice = createSlice({
  name: 'editedData',
  initialState: {
    editedData: '',
  },
  reducers: {
    saveData: (state, action) => {
      state.editedData = action.payload;
    },
  },
});

export const { saveData } = EditedSlice.actions;
export default EditedSlice;
