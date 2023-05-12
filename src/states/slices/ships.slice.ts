import { createSlice } from '@reduxjs/toolkit';
import { GetShipsListThunk } from '../../actions/Thunks/ShipsThunk';

const SHIPS = 'SHIPS';

const initialState: any = {
  ship: null,
};

const heroesSlice = createSlice({
  name: SHIPS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetShipsListThunk.fulfilled, (state, { payload }) => {
      state.shipsData = payload;
    });
  },
});

export default heroesSlice.reducer;
