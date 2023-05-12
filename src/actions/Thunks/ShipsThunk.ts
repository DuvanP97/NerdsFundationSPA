import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetErrorMessage } from '../../utils';
import { GetShip, GetShipsList } from '../ApiClient/ShipsActions';

export const GetShipsListThunk = createAsyncThunk(
    'ships/shipsList',
    async (id: string | null, { rejectWithValue }) => {
      try {
        const ShipsList = await GetShipsList(id);
        return ShipsList;
      } catch (error) {
        return rejectWithValue(GetErrorMessage(error));
      }
    }
  );

  export const GetShipThunk = createAsyncThunk(
    'ship/shipDetail',
    async (id: string, { rejectWithValue }) => {
      try {
        const ShipDetail = await GetShip(id);
        return ShipDetail;
      } catch (error) {
        return rejectWithValue(GetErrorMessage(error));
      }
    }
  );