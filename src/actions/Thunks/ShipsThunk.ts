import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetErrorMessage } from '../../utils';
import { GetShipsList } from '../ApiClient/ShipsActions';

export const GetShipsListThunk = createAsyncThunk(
    'ships/shipsList',
    async (_, { rejectWithValue }) => {
      try {
        const ShipsList = await GetShipsList();
        return ShipsList;
      } catch (error) {
        return rejectWithValue(GetErrorMessage(error));
      }
    }
  );