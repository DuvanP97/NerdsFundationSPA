declare interface IHttpResponse<T> {
  okay: boolean;
  message: string;
  data: T | null;
}

declare interface IDataResponseCharacters {
  count: number,
  next: string | null,
  previous: string | null,
  results: IDataCharacters[]
}

declare interface IDataCharacters {
  birth_year: string,
  created: string,
  edited: string,
  eye_color: string,
  gender: string,
  hair_color: string,
  height: string,
  homeworld: string,
  mass: string,
  name: string,
  skin_color: string,
  species: string,
  url: string,
}

declare interface IDataResponsePlanets {
  count: number,
  next: string | null,
  previous: string | null,
  results: IDataPlanets[]
}

declare interface IDataPlanets {
  climate: string,
  created: string,
  edited: string,
  diameter: string,
  gravity: string,
  orbital_period: string,
  population: string,
  rotation_period: string,
  surface_water: string,
  name: string,
  terrain: string,
  url: string,
}

declare interface IDataResponseShips {
  count: number,
  next: string | null,
  previous: string | null,
  results: IDataShips[]
}

declare interface IDataShips {
  MGLT: string,
  created: string,
  edited: string,
  cargo_capacity: string,
  consumables: string,
  cost_in_credits: string,
  crew: string,
  hyperdrive_rating: string,
  length: string,
  name: string,
  manufacturer: string,
  max_atmosphering_speed: string,
  model: string,
  passengers: string,
  starship_class: string,
  url: string,
}