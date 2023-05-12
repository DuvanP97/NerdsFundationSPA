import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetErrorMessage } from '../../utils';
import { GetPlanetsList } from '../ApiClient/PlanetsActions';

export const GetPlanetsListThunk = createAsyncThunk(
    'planet/planetsList',
    async (_, { rejectWithValue }) => {
      try {
        const PlanetsList = await GetPlanetsList();
        return PlanetsList;
      } catch (error) {
        return rejectWithValue(GetErrorMessage(error));
      }
    }
  );