'use client'
import BackButton from '@/app/components/backbutton'
import { api } from '@/app/services/api'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import { useParams } from 'next/navigation'

export default function Details() {
  const getUseParams = useParams()

  const getDrinkById = async () => {
    const response = await api.get(`/lookup.php?i=${getUseParams.drinks}`)
    return response.data.drinks[0]
  }

  const { data } = useQuery({
    queryKey: ['drinkdetails'],
    queryFn: getDrinkById,
  })
  // const getIngredients = data && (Object.keys(data).filter(v => v.startsWith('strIngredient')).map((strIngredient, index) =>(data[strIngredient]))).filter((item)=> item !== null)
  const getIngredients =
    data &&
    Object.keys(data)
      .filter((v) => v.startsWith('strIngredient'))
      .map(
        (strIngredient, index) =>
          data['strMeasure'.concat(String(index + 1))] +
          ' '.concat(String(data[strIngredient])),
      )
      .filter((item) => item !== 'null null')

  return (
    <div className="mt-64 flex w-screen flex-row flex-wrap items-center justify-center gap-10 px-5  pb-20 md:mt-72 md:px-20">
      {data && (
        <div key={data.idDrink} className="h-full w-full text-white">
          <div className="flex flex-col gap-y-4">
            <div className="relative z-10 flex w-full items-center justify-center drop-shadow-2xl">
              <Image
                src={data.strDrinkThumb}
                priority={true}
                placeholder="blur"
                blurDataURL={data.strDrinkThumb}
                width={200}
                height={200}
                alt="drink-image"
                className="h-2/3 w-2/3 rounded-lg object-contain md:h-1/3 md:w-1/3"
              />
            </div>
            <h1 className="py-4 text-center text-2xl  font-bold underline decoration-blueneon-300 underline-offset-8 md:text-3xl">
              {data.strDrink}
            </h1>
            <div className="flex flex-col gap-y-4 text-lg text-newfuchsia-700 md:text-lg">
              <p className="text-md text-start font-bold text-blueneon-300 md:text-lg">
                {data.strAlcoholic}
              </p>
              <div className="flex flex-row">
                <p className="text-start text-lg font-bold  md:text-xl">
                  Category:
                </p>
                <p className="ml-1 text-start text-lg  text-white md:text-xl">
                  {data.strCategory}
                </p>
              </div>
              <div className="flex flex-row pb-4 text-start text-lg md:text-xl ">
                <p className="font-bold">Type of glass:</p>
                <p className="ml-1 text-white">{data.strGlass}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <h3 className="text-start text-lg font-bold text-newfuchsia-700 md:text-xl">
              Ingredients:
            </h3>
            <ul className="list-disc px-5">
              {getIngredients &&
                getIngredients.map((ingredient: any, index: number) => (
                  <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3 className="text-start text-lg font-bold text-newfuchsia-700 md:text-xl">
              Instructions:
            </h3>
            <p className="text-justify text-lg text-white md:text-xl">
              {data.strInstructions}
            </p>
          </div>
        </div>
      )}
      <BackButton />
    </div>
  )
}
