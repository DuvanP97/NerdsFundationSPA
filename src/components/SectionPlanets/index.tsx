import * as React from "react";
import { planets } from "../../constants/dataMock";

const SectionPlanets = (): JSX.Element => {
  return (
    <React.Fragment>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              StarWars Planets
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The fictional universe of the Star Wars franchise features multiple planets and moons.
            </p>
          </div>
          <ul
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {planets.map((planet) => (
              <li key={planet.name}>
                <div className="flex items-center gap-x-6 ">
                    <img
                      className="h-16 w-16 rounded-full "
                      src={planet.imageUrl}
                      alt="SIN IMAGEN"
                      />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {planet.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {planet.role}
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

export default SectionPlanets;
