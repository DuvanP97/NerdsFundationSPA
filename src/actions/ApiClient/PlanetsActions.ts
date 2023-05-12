import { HttpRequest } from './HttpRequest';
import { API_URL } from '../../constants/dataMock';
import { GetErrorMessage } from '../../utils';

  export async function GetPlanetsList(id: string | null): Promise<IDataResponsePlanets> {
    try {
      if (id === null || id === '1') {
        const PlanetsList = await new HttpRequest().Get<IDataResponsePlanets>(
          `${API_URL}planets/`
        );
        if (PlanetsList.okay && PlanetsList.data) {
          return PlanetsList.data;
        } else {
          throw Error(PlanetsList.message);
        }
      } else {
        const PlanetsList = await new HttpRequest().Get<IDataResponsePlanets>(
          `${API_URL}planets/?page=${id}`
        );
        if (PlanetsList.okay && PlanetsList.data) {
          return PlanetsList.data;
        } else {
          throw Error(PlanetsList.message);
        }
      }
    } catch (error) {
      throw new Error(GetErrorMessage(error));
    }
  }
  
  export async function GetPlanet(id: string): Promise<IDataPlanets> {
    try {
      const Character = await new HttpRequest().Get<IDataPlanets>(
        `${API_URL}planets/${id}/`
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