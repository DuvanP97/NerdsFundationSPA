import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetErrorMessage } from '../../utils';
import { GetPlanetsList, GetPlanet } from '../ApiClient/PlanetsActions';

export const GetPlanetsListThunk = createAsyncThunk(
    'planet/planetsList',
    async (id: string | null, { rejectWithValue }) => {
      try {
        const PlanetsList = await GetPlanetsList(id);
        return PlanetsList;
      } catch (error) {
        return rejectWithValue(GetErrorMessage(error));
      }
    }
  );

  export const GetPlanetThunk = createAsyncThunk(
    'planet/planetDetail',
    async (id: string, { rejectWithValue }) => {
      try {
        const PlanetDetail = await GetPlanet(id);
        return PlanetDetail;
      } catch (error) {
        return rejectWithValue(GetErrorMessage(error));
      }
    }
  );