import * as React from "react";
import Header from '../../components/Header/Header'
import { GetCharacterListThunk } from '../../actions/Thunks/CharacterThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const Characters = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const characters = useAppSelector((state) => state.characterData.charactersData);
  
  const [page, setPage] = React.useState('1');
  const [filtro, setFiltro] = React.useState('');
  const [listFilter, setListFilter] = React.useState(characters.results);

  const pageQuantity = Math.ceil((characters.count/10) * 1) / 1
  const numerInt = parseInt(page)
  const mapPagination = Array.from({ length: pageQuantity }, (_, index) => index + 1);
  
  const getCharacterList = React.useCallback(async () => {
    const characters = await dispatch(GetCharacterListThunk(page));
    if (GetCharacterListThunk.rejected.match(characters)) {
      console.error(characters.payload as string);
    }
  }, [dispatch, page]);

  React.useEffect(() => {
    if (filtro === '') {
      setListFilter(characters.results)
    }else {
      const  resultFilter =characters.results.filter((x: any)  => x.name.toLowerCase().includes(filtro.toLowerCase()))
      console.log('test', resultFilter)
      setListFilter(resultFilter)
    }
    
  }, [characters.results, filtro]);

  React.useEffect(() => {
    getCharacterList();
  }, [getCharacterList]);

  return (
    <React.Fragment>
      <Header/>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">CHARACTERS</h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {listFilter !== undefined &&
                listFilter.map((person: any) => (
                <a href={"character-detail/"+person.url.match(/\d+/g)}>
                  <div key={person.name} className="group relative">
                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                        <img
                          className="h-full w-full object-cover object-center"
                          src={"https://starwars-visualguide.com/assets/img/characters/"+person.url.match(/\d+/g)+".jpg"}
                          alt="SIN IMAGEN"
                        />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                        <span className="absolute inset-0" />
                        {person.name}
                    </h3>
                    
                    <p className="text-base font-semibold text-gray-900">{person.birth_year}</p>
                    <br />
                  </div>
                </a>
              ))} 
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Filtrar por nombre"
          />
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              {mapPagination.map((index: any, key: any) => (
                <button
                className="relative z-10 inline-flex items-center bg-gray-600 px-4 py-2 text-sm font-semibold text-white"
                onClick={() => setPage(key+1)}
                >
                  {key+1}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-between sm:hidden">
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Filtrar por nombre"
          />
      </div>
      <div className="flex flex-1 justify-between sm:hidden">
        {page !== '1' &&
          <button
            onClick={() => {setPage((numerInt - 1).toString())}}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </button>
        }
        {numerInt <= pageQuantity &&
          <button
            onClick={() => {setPage((numerInt + 1).toString())}}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </button>
        }
      </div>
      <br />
    </React.Fragment>
  )
}
export default Characters;
