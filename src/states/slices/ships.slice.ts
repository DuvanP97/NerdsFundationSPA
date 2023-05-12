import { createSlice } from '@reduxjs/toolkit';
import { GetShipThunk, GetShipsListThunk } from '../../actions/Thunks/ShipsThunk';

const SHIPS = 'SHIPS';

const initialState: any = {
  ship: null,
  shipDetail: null,
};

const heroesSlice = createSlice({
  name: SHIPS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetShipsListThunk.fulfilled, (state, { payload }) => {
      state.shipsData = payload;
    });
    builder.addCase(GetShipThunk.fulfilled, (state, { payload }) => {
      state.shipDetail = payload;
    });
  },
});

export default heroesSlice.reducer;
