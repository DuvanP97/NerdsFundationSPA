import * as React from "react";
import { GetCharacterListThunk } from '../../actions/Thunks/CharacterThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const SectionPerson = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const characters = useAppSelector((state) => state.characterData.charactersData);

    const objectData = characters.results.slice(0, 6);

    const getCharacterList = React.useCallback(async () => {
      const characters = await dispatch(GetCharacterListThunk(null));
      if (GetCharacterListThunk.rejected.match(characters)) {
        console.error(characters.payload as string);
      }
    }, [dispatch]);
  
    React.useEffect(() => {
      getCharacterList();
    }, [getCharacterList]);

  return (
    <React.Fragment>
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                  <div className="max-w-2xl">
                        <a
                        href="characters"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500"
                        >
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                StarWars Characters
                            </h2>
                        </a>
                      <p className="mt-6 text-lg leading-8 text-gray-200">
                      A People resource is an individual person or character within the
                      Star Wars universe.
                      </p>
                  </div>
                  <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2" >
                      {objectData !== undefined &&
                        objectData.map((person: IDataCharacters, key: number) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                            <img
                                className="h-16 w-16 rounded-full"
                                src={"https://starwars-visualguide.com/assets/img/characters/"+(key+1)+".jpg"}
                                alt="SIN IMAGEN"
                            />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-100">
                                {person.name}
                                </h3>
                                <p className="text-sm font-semibold leading-6 text-gray-400">
                                {person.birth_year}
                                </p>
                            </div>
                            </div>
                        </li>
                      ))}
                  </ul>
              </div>
          </div>
          <div
              className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
              aria-hidden="true"
          >
              <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
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

export default SectionPerson;
