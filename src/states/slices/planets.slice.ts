import { createSlice } from '@reduxjs/toolkit';
import { GetPlanetThunk, GetPlanetsListThunk } from '../../actions/Thunks/PlanetsThunk';

const PLANETS = 'PLANETS';

const initialState: any = {
  planet: null,
  planetDetail: null,
};

const planetsSlice = createSlice({
  name: PLANETS,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetPlanetsListThunk.fulfilled, (state, { payload }) => {
      state.planetsData = payload;
    });
    builder.addCase(GetPlanetThunk.fulfilled, (state, { payload }) => {
      state.planetDetail = payload;
    });
  },
});

export default planetsSlice.reducer;
