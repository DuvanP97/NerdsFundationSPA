import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Persons", href: "#" },
  { name: "Planets", href: "#" },
  { name: "Ships", href: "#" },
];

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/2.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/3.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/4.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/5.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/6.jpg",
  },
];

const ships = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/planets/1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
];

const planets = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://github.com/DuvanP97/memory/blob/main/darth-vader.png?raw=true"
                alt="darth-vader"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              <img
                className="h-8 w-auto"
                src="https://github.com/DuvanP97/memory/blob/main/pelicula.png?raw=true"
                alt="R2D2"
              />
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <img
                      className="h-8 w-auto"
                      src="https://github.com/DuvanP97/memory/blob/main/pelicula.png?raw=true"
                      alt="R2D2"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
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
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <br />
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Perform a search for your favorite character.
              </h2>
              <div className="mt-6 flex max-w-md gap-x-4">
                <input
                  id="character"
                  name="character"
                  type="character"
                  autoComplete="character"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Search
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <img
                    className="h-8 w-auto"
                    src="https://github.com/DuvanP97/memory/blob/main/Copia%20de%20sable-de-luz.png?raw=true"
                    alt="R2D2"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  All the Star Wars data you've ever wanted:
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Planets, Spaceships, Vehicles, People, Films and Species
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <img
                    className="h-8 w-auto"
                    src="https://github.com/DuvanP97/memory/blob/main/Copia%20de%20sable-de-luz.png?raw=true"
                    alt="R2D2"
                  />
                </div>
                <dt className="mt-4 font-semibold text-white">
                  From all SEVEN Star Wars films
                </dt>
                <dd className="mt-2 leading-7 text-gray-400">
                  Now with The Force Awakens data!
                </dd>
              </div>
            </dl>
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
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              StarWars Characters
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A People resource is an individual person or character within the
              Star Wars universe.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              StarWars Characters
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A People resource is an individual person or character within the
              Star Wars universe.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {ships.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              StarWars Characters
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A People resource is an individual person or character within the
              Star Wars universe.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
