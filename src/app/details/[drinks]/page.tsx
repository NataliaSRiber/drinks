'use client'
import { IdrinkDetails } from '@/app/interfaces/Drink'
import { api } from '@/app/services/api'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
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
    <div className='flex flex-row w-screen items-center pt-80 flex-wrap justify-center gap-10 bg-newblue-950 px-4 md:px-20 pb-20'>
      <Link href='/'>
        <button className='text-white'>Back</button>
      </Link>
      {data &&
        <div key={data.idDrink} className='w-full h-full text-white'>
          <div className='flex flex-col gap-y-4'>
            <div  className='w-full relative z-10 flex items-center justify-center'>
              <img src={data.strDrinkThumb} alt='drink-image' className='md:w-1/3 md:h-1/3 rounded-lg w-1/2 h-1/2'/>
            </div>
            <h1 className="md:text-3xl text-2xl text-center md:py-6 p-2 underline underline-offset-8 decoration-blue-500 font-bold">{data.strDrink}</h1>
            <div className='flex flex-col text-newfuchsia-700 md:text-lg text-lg gap-y-1'>
              <p className="md:text-lg text-md text-start font-bold text-blue-500">{data.strAlcoholic}</p>
              <div className='flex flex-row'>
                <p className="md:text-xl text-lg text-start md:py-6 font-bold">Category:</p>
                <p className="md:text-xl text-lg text-start md:py-6 text-white ml-1">{data.strCategory}</p>           
              </div>
              <div className='flex flex-row'>
                <p className="md:text-xl text-lg text-start md:py-6 font-bold">Type of glass:</p>
                <p className="md:text-xl text-lg text-start md:py-6 text-white ml-1">{data.strGlass}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-newfuchsia-700 md:text-xl text-lg text-start py-6 font-bold'>Ingredients:</h3>
            <ul className='list-disc'>
              {getIngredients && getIngredients.map((ingredient: any, index: number) =>
                <li key={index}>{ingredient}</li>
              )}
            </ul>
            <h3 className='text-newfuchsia-700 md:text-xl text-lg text-start py-6 font-bold'>Instructions:</h3>
            <p className='text-white md:text-xl text-lg text-justify'>{data.strInstructions}</p>
          </div>
        </div>
}
    </div>
  )
}