import * as React from "react";
import Header from '../../../components/Header/Header'
import { GetCharacterThunk } from '../../../actions/Thunks/CharacterThunk';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useParams } from 'react-router-dom';

const DetailCharacter = (): JSX.Element => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const characters = useAppSelector((state) => state.characterDetail.characterDetail);

    const getCharacterList = React.useCallback(async () => {
        if (id) {
            const characters = await dispatch(GetCharacterThunk(id.toString()));
            if (GetCharacterThunk.rejected.match(characters)) {
              console.error(characters.payload as string);
            }
        }
    }, [dispatch, id]);
  
    React.useEffect(() => {
      getCharacterList();
    }, [getCharacterList]);

  return (
    <React.Fragment>
      <Header/>
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{characters.name}</p>
                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        <div className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                                birth_year
                            </dt>{' '}
                            <dd className="inline">{characters.birth_year}</dd>
                        </div>
                        <div className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                                height
                            </dt>{' '}
                            <dd className="inline">{characters.height}</dd>
                        </div>
                        <div className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                                mass
                            </dt>{' '}
                            <dd className="inline">{characters.mass}</dd>
                        </div>
                        <div className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                                hair_color
                            </dt>{' '}
                            <dd className="inline">{characters.hair_color}</dd>
                        </div>
                        <div className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                                skin_color
                            </dt>{' '}
                            <dd className="inline">{characters.skin_color}</dd>
                        </div>
                        <div className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                                eye_color
                            </dt>{' '}
                            <dd className="inline">{characters.eye_color}</dd>
                        </div>
                        <div className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                                birth_year
                            </dt>{' '}
                            <dd className="inline">{characters.birth_year}</dd>
                        </div>
                        <div className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                </svg>
                                gender
                            </dt>{' '}
                            <dd className="inline">{characters.gender}</dd>
                        </div>
                    </dl>
                    </div>
                </div>
                <img
                    src={"https://starwars-visualguide.com/assets/img/characters/"+id+".jpg"}
                    alt="Product screenshot"
                    className="rounded-xl shadow-xl "
                    width={1000}
                />
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
export default DetailCharacter;
