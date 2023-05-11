import * as React from "react";
import { ships } from "../../constants/dataMock";

const SectionShips = (): JSX.Element => {
  return (
    <React.Fragment>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            StarWars Ships
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Types of starships included the shuttle, transport, freighter, yacht, starfighter, bomber, scout ship, gunship, assault ship, warship, and space station.
          </p>
        </div>
        <ul
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {ships.map((ship) => (
            <li key={ship.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src={ship.imageUrl}
                  alt="SIN IMAGEN"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {ship.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {ship.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </React.Fragment>
  );
};

export default SectionShips;
