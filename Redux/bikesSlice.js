// redux/bikesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bikesSlice = createSlice({
  name: 'bike',
  initialState: {
    bikes: [],
  },
  reducers: {
    setBikes: (state, action) => {
      state.bikes = action.payload;
    },
    addBike: (state, action) => {
      state.bikes.push(action.payload);
    },
    // Bạn có thể thêm các reducer khác như updateBike, deleteBike nếu cần
  },
});

export const { setBikes, addBike } = bikesSlice.actions;
export default bikesSlice.reducer;
