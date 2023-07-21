'use client'
import { IdrinkDetails } from '@/app/interfaces/Drink'
import { api } from '@/app/services/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export default function Details() {
  const getUseParams = useParams();
  
  const getDrinkById = async () => {
    const response = await api.get<IdrinkDetails>(`/lookup.php?i=${getUseParams.drinks}`)  
    return response.data.drinks;
  }
  
  const {data} = useQuery({
    queryKey: ['drinkdetails'],
    queryFn: getDrinkById
  })

  return (       
    <div className='flex flex-row w-screen items-center pt-80 flex-wrap justify-center gap-10 bg-newblue-950 px-4 md:px-20 pb-20'>
      {data && data.map(({idDrink, strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb, strIngredient1, strIngredient2, strIngredient3,strIngredient4,strIngredient5, strIngredient6,strIngredient7, }) => (
        <div key={idDrink} className='w-full h-full text-white'>
          <div className='flex flex-col gap-y-4'>
            <div  className='w-full relative z-10 flex items-center justify-center'>
              <img src={strDrinkThumb} alt='drink-image' className='md:w-1/3 md:h-1/3 rounded-lg w-1/2 h-1/2'/>
            </div>
            <h1 className="md:text-3xl text-2xl text-center md:py-6 p-2 underline underline-offset-8 decoration-blue-500 font-bold">{strDrink}</h1>
            <div className='flex flex-col text-newfuchsia-700 md:text-xl text-lg gap-y-4'>
              <p className="md:text-xl text-lg text-start md:py-6 py-2 font-bold">{strAlcoholic}</p>
              <div className='flex flex-row'>
                <p className="md:text-xl text-lg text-start md:py-6 py-1 font-bold">Category:</p>
                <p className="md:text-xl text-lg text-start md:py-6 py-1 text-white ml-1">{strCategory}</p>           
              </div>
              <div className='flex flex-row'>
                <p className="md:text-xl text-lg text-start md:py-6 py-1 font-bold">Type of glass:</p>
                <p className="md:text-xl text-lg text-start md:py-6 py-1 text-white ml-1">{strGlass}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-newfuchsia-700 md:text-xl text-lg text-start py-6 font-bold'>Ingredients:</h3>
            <ul>
              <li>{strIngredient1}</li>
              <li></li>
            </ul>
            <h3 className='text-newfuchsia-700 md:text-xl text-lg text-start py-6 font-bold'>Instructions:</h3>
            <p className='text-white md:text-xl text-lg text-justify'>{strInstructions}</p>
          </div>
        </div>
      ) )}
    </div>
  )
}