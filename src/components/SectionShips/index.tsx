import * as React from "react";
import { GetShipsListThunk } from '../../actions/Thunks/ShipsThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const SectionShips = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const ships = useAppSelector((state) => state.shipsData.shipsData);

  
  const objectData = ships.results.slice(0, 6);
  
  console.log('ships', objectData)
  const getShipsList = React.useCallback(async () => {
    const Ships = await dispatch(GetShipsListThunk());
    if (GetShipsListThunk.rejected.match(Ships)) {
      console.error(Ships.payload as string);
    }
  }, [dispatch]);

  React.useEffect(() => {
    getShipsList();
  }, [getShipsList]);

  return (
    <React.Fragment>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl">
              <a
              href="ships"
              className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500"
              >
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  StarWars Ships
                </h2>
              </a>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                Types of starships included the shuttle, transport, freighter, yacht, starfighter, bomber, scout ship, gunship, assault ship, warship, and space station.
              </p>
            </div>
            <ul
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {objectData !== undefined &&
                objectData.map((ship: any, key: any) => (
                <li key={ship.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                        className="h-16 w-16 rounded-full"
                        src={"https://starwars-visualguide.com/assets/img/starships/"+(key+1)+".jpg"}
                        alt="SIN IMAGEN"
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-200">
                        {ship.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-gray-400">
                        {ship.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
        >
          <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
              clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionShips;
