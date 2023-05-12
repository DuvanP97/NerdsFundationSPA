import { createAsyncThunk } from '@reduxjs/toolkit';
import { GetErrorMessage } from '../../utils';
import { GetCharacterList, GetCharacter } from '../ApiClient/CharacterActions';

export const GetCharacterListThunk = createAsyncThunk(
  'character/characterList',
  async (id: string | null, { rejectWithValue }) => {
    try {
      const CharactersList = await GetCharacterList(id);
      return CharactersList;
    } catch (error) {
      return rejectWithValue(GetErrorMessage(error));
    }
  }
);

export const GetCharacterThunk = createAsyncThunk(
  'character/characterDetail',
  async (id: string, { rejectWithValue }) => {
    try {
      const CharactersDetail = await GetCharacter(id);
      return CharactersDetail;
    } catch (error) {
      return rejectWithValue(GetErrorMessage(error));
    }
  }
);