import * as React from "react";
import Header from '../../../components/Header/Header'
import { dataCharacter } from '../../../constants/dataMock'

const DetailCharacter = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header/>
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                        iste dolor cupiditate blanditiis ratione.
                    </p>
                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        {dataCharacter.map((data) => (
                        <div key={data.name} className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                            <data.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                            {data.name}
                            </dt>{' '}
                            <dd className="inline">{data.description}</dd>
                        </div>
                        ))}
                    </dl>
                    </div>
                </div>
                <img
                    src="https://starwars-visualguide.com/assets/img/characters/1.jpg"
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
