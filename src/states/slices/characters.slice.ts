import { createSlice } from '@reduxjs/toolkit';
import { GetCharacterListThunk, GetCharacterThunk } from '../../actions/Thunks/CharacterThunk';

const CHARACTER = 'CHARACTER';

const initialState: any = {
  character: null,
  characterDetail: null,
};

const charactersSlice = createSlice({
  name: CHARACTER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetCharacterListThunk.fulfilled, (state, { payload }) => {
      state.charactersData = payload;
    });
    builder.addCase(GetCharacterThunk.fulfilled, (state, { payload }) => {
      state.characterDetail = payload;
    });
  },
});

export default charactersSlice.reducer;
