import * as React from "react";
import { GetPlanetsListThunk } from '../../actions/Thunks/PlanetsThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const SectionPlanets = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const planets = useAppSelector((state) => state.planetsData.planetsData);

    const objectData = planets.results.slice(0, 6);

    const getPlanetsList = React.useCallback(async () => {
      const planets = await dispatch(GetPlanetsListThunk(null));
      if (GetPlanetsListThunk.rejected.match(planets)) {
        console.error(planets.payload as string);
      }
    }, [dispatch]);
  
    React.useEffect(() => {
      getPlanetsList();
    }, [getPlanetsList]);

  return (
    <React.Fragment>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
              <a
              href="planets"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              StarWars Planets
                </h2>
              </a>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The fictional universe of the Star Wars franchise features multiple planets and moons.
            </p>
          </div>
          <ul
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
          {objectData !== undefined &&
            objectData.map((planet: IDataPlanets, key: number) => (
              <li key={planet.name}>
                <div className="flex items-center gap-x-6 ">
                    <img
                        className="h-16 w-16 rounded-full"
                        src={"https://starwars-visualguide.com/assets/img/planets/"+(key+1)+".jpg"}
                        alt="SIN IMAGEN"
                    />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {planet.name}
                    </h3>
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
