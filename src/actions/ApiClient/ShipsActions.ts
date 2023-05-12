import { HttpRequest } from './HttpRequest';
import { API_URL } from '../../constants/dataMock';
import { GetErrorMessage } from '../../utils';

export async function GetShipsList(): Promise<any> {
    try {
      const ShipsList = await new HttpRequest().Get<any>(
        `${API_URL}starships/`
      );
      if (ShipsList.okay && ShipsList.data) {
        return ShipsList.data;
      } else {
        throw Error(ShipsList.message);
      }
    } catch (error) {
      throw new Error(GetErrorMessage(error));
    }
  }