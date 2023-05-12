import { createSlice } from '@reduxjs/toolkit';
import { GetPlanetsListThunk } from '../../actions/Thunks/PlanetsThunk';

const PLANETS = 'PLANETS';

const initialState: any = {
  planet: null,
};

const heroesSlice = createSlice({
  name: PLANETS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetPlanetsListThunk.fulfilled, (state, { payload }) => {
      state.planetsData = payload;
    });
  },
});

export default heroesSlice.reducer;
