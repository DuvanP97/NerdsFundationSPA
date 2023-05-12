import { HttpRequest } from './HttpRequest';
import { API_URL } from '../../constants/dataMock';
import { GetErrorMessage } from '../../utils';

export async function GetCharacterList(id: string | null): Promise<IDataResponseCharacters> {
  try {
    if (id === null || id === '1') {
      const CharactersList = await new HttpRequest().Get<IDataResponseCharacters>(
        `${API_URL}people/`
      );
      if (CharactersList.okay && CharactersList.data) {
        return CharactersList.data;
      } else {
        throw Error(CharactersList.message);
      }
    } else {
      const CharactersList = await new HttpRequest().Get<IDataResponseCharacters>(
        `${API_URL}people/?page=${id}`
      );
      if (CharactersList.okay && CharactersList.data) {
        return CharactersList.data;
      } else {
        throw Error(CharactersList.message);
      }
    }
  } catch (error) {
    throw new Error(GetErrorMessage(error));
  }
}

export async function GetCharacter(id: string): Promise<IDataCharacters> {
  try {
    const Character = await new HttpRequest().Get<IDataCharacters>(
      `${API_URL}people/${id}/`
    );
    if (Character.okay && Character.data) {
      return Character.data;
    } else {
      throw Error(Character.message);
    }
  } catch (error) {
    throw new Error(GetErrorMessage(error));
  }
}