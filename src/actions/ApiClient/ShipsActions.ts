import { HttpRequest } from './HttpRequest';
import { API_URL } from '../../constants/dataMock';
import { GetErrorMessage } from '../../utils';

  export async function GetShipsList(id: string | null): Promise<IDataResponseShips> {
    try {
      if (id === null || id === '1') {
        const ShipsList = await new HttpRequest().Get<IDataResponseShips>(
          `${API_URL}starships/`
        );
        if (ShipsList.okay && ShipsList.data) {
          return ShipsList.data;
        } else {
          throw Error(ShipsList.message);
        }
      } else {
        const ShipsList = await new HttpRequest().Get<IDataResponseShips>(
          `${API_URL}starships/?page=${id}`
        );
        if (ShipsList.okay && ShipsList.data) {
          return ShipsList.data;
        } else {
          throw Error(ShipsList.message);
        }
      }
    } catch (error) {
      throw new Error(GetErrorMessage(error));
    }
  }
  
  export async function GetShip(id: string): Promise<IDataShips> {
    try {
      const Ship = await new HttpRequest().Get<IDataShips>(
        `${API_URL}starships/${id}/`
      );
      if (Ship.okay && Ship.data) {
        return Ship.data;
      } else {
        throw Error(Ship.message);
      }
    } catch (error) {
      throw new Error(GetErrorMessage(error));
    }
  }