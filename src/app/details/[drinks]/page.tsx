'use client'
import BackButton from '@/app/components/backbutton';
import { api } from '@/app/services/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export default function Details() {
  const getUseParams = useParams();
    
  const getDrinkById = async () => {
    const response = await api.get<any>(`/lookup.php?i=${getUseParams.drinks}`) 
    return response.data.drinks[0];
  }
  
  const {data} = useQuery({
    queryKey: ['drinkdetails'],
    queryFn: getDrinkById
  })
    // const getIngredients = data && (Object.keys(data).filter(v => v.startsWith('strIngredient')).map((strIngredient, index) =>(data[strIngredient]))).filter((item)=> item !== null)
    const getIngredients = data && (Object.keys(data).filter(v => v.startsWith('strIngredient')).map((strIngredient, index) => (data['strMeasure'.concat(String(index+1))]) + ' '.concat(String(data[strIngredient]))).filter((item)=> item !== 'null null'))

    return (       
    <div className='flex flex-row w-screen items-center md:mt-72 mt-64 flex-wrap justify-center gap-10  md:px-20 pb-20 px-5'>
      {data &&
        <div key={data.idDrink} className='w-full h-full text-white'>
          <div className='flex flex-col gap-y-4'>
            <div className='w-full relative z-10 flex items-center justify-center drop-shadow-2xl'>
              <img src={data.strDrinkThumb} alt='drink-image' className='md:w-1/3 md:h-1/3 rounded-lg w-2/3 h-2/3'/>
            </div>
            <h1 className="md:text-3xl text-2xl text-center  py-4 underline underline-offset-8 decoration-blueneon-300 font-bold">{data.strDrink}</h1>
            <div className='flex flex-col text-newfuchsia-700 md:text-lg text-lg gap-y-4'>
              <p className="md:text-lg text-md text-start font-bold text-blueneon-300">{data.strAlcoholic}</p>
              <div className='flex flex-row'>
                <p className="md:text-xl text-lg text-start  font-bold">Category:</p>
                <p className="md:text-xl text-lg text-start  text-white ml-1">{data.strCategory}</p>           
              </div>
              <div className='flex flex-row pb-4 md:text-xl text-lg text-start '>
                <p className="font-bold">Type of glass:</p>
                <p className="text-white ml-1">{data.strGlass}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-4'>
            <h3 className='text-newfuchsia-700 md:text-xl text-lg text-start font-bold'>Ingredients:</h3>
            <ul className='list-disc px-5'>
              {getIngredients && getIngredients.map((ingredient: any, index: number) =>
                <li key={index}>{ingredient}</li>
              )}
            </ul>
            <h3 className='text-newfuchsia-700 md:text-xl text-lg text-start font-bold'>Instructions:</h3>
            <p className='text-white md:text-xl text-lg text-justify'>{data.strInstructions}</p>
          </div>
        </div>
      }
      <BackButton />
    </div>
  )
}