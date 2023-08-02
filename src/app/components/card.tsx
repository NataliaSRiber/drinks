import Image from 'next/image'
import { IFilteredDrinks } from '../interfaces/Drink'
import Link from 'next/link'

export interface IAppProps {
  drinksData?: IFilteredDrinks[]
}

export default function Card({ drinksData }: IAppProps) {
  return (
    <div className="flex w-screen flex-row flex-wrap items-center justify-center gap-10 pt-12">
      {drinksData?.map(({ strDrink, idDrink, strDrinkThumb }) => (
        <div
          key={idDrink}
          className="relative flex h-[450px] w-[260px] flex-col items-center justify-evenly gap-y-4 overflow-hidden rounded-2xl bg-black from-purpleneon-500 to-pinkneon-500 before:absolute before:h-[140%] before:w-[150px] before:animate-spin-slow before:bg-gradient-to-b after:absolute after:inset-1 after:bg-newblue-950 md:w-[300px]"
        >
          <h1 className="bold relative z-10 w-full px-3 text-center text-2xl font-bold text-white md:text-3xl">
            {strDrink}
          </h1>
          <div className="relative z-10 flex w-full items-center justify-center">
            <Image
              src={strDrinkThumb}
              placeholder="blur"
              blurDataURL={strDrinkThumb}
              width={200}
              height={200}
              alt="drink-image"
              className="h-40 w-2/3 rounded-lg"
            />
          </div>
          <div className="z-10 mt-4 flex items-center justify-center rounded-lg border border-b-4 border-purpleneon-500 p-2">
            <Link
              href={`/details/${idDrink}`}
              className="cursor-pointer bg-purpleneon-500 text-base font-semibold text-white opacity-90 drop-shadow-9xl hover:opacity-100 md:text-lg"
            >
              More informations
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
