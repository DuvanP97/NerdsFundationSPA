import { HttpRequest } from './HttpRequest';
import { API_URL } from '../../constants/dataMock';
import { GetErrorMessage } from '../../utils';

export async function GetPlanetsList(): Promise<any> {
    try {
      const PlanetsList = await new HttpRequest().Get<any>(
        `${API_URL}planets/`
      );
      if (PlanetsList.okay && PlanetsList.data) {
        return PlanetsList.data;
      } else {
        throw Error(PlanetsList.message);
      }
    } catch (error) {
      throw new Error(GetErrorMessage(error));
    }
  }