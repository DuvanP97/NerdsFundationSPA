import * as React from "react";
import Header from '../../components/Header/Header'
import { GetShipsListThunk } from '../../actions/Thunks/ShipsThunk';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const Ships = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const ships = useAppSelector((state) => state.shipsData.shipsData);
  
  const [page, setPage] = React.useState('1');
  const [filtro, setFiltro] = React.useState('');
  const [listFilter, setListFilter] = React.useState(ships.results);

  const pageQuantity = Math.ceil((ships.count/10) * 1) / 1
  const numerInt = parseInt(page)
  const mapPagination = Array.from({ length: pageQuantity }, (_, index) => index + 1);
  
  const getShipsList = React.useCallback(async () => {
    const ships = await dispatch(GetShipsListThunk(page));
    if (GetShipsListThunk.rejected.match(ships)) {
      console.error(ships.payload as string);
    }
  }, [dispatch, page]);

  React.useEffect(() => {
    if (filtro === '') {
      setListFilter(ships.results)
    }else {
      const  resultFilter =ships.results.filter((x: IDataShips)  => x.name.toLowerCase().includes(filtro.toLowerCase()))
      setListFilter(resultFilter)
    }
    
  }, [ships.results, filtro]);

  React.useEffect(() => {
    getShipsList();
  }, [getShipsList]);

  return (
    <React.Fragment>
      <Header/>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">STARSHIPS</h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {listFilter !== undefined &&
              listFilter.map((ship: IDataShips) => (
                <div key={ship.name} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                      <img
                        className="h-full w-full object-cover object-center"
                        src={"https://starwars-visualguide.com/assets/img/starships/"+ship.url.match(/\d+/g)+".jpg"}
                        alt="SIN IMAGEN"
                      />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                      <span className="absolute inset-0" />
                      {ship.name}
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{ship.passengers}</p>
                  <br />
                </div>
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
            placeholder="Filter by name"
          />
          <div>
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              {mapPagination.map((index: number, key: number) => (
                <button
                className="relative z-10 inline-flex items-center bg-gray-600 px-4 py-2 text-sm font-semibold text-white"
                onClick={() => setPage((key+1).toString())}
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
            placeholder="Filter by name"
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
export default Ships;
