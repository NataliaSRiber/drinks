'use client'
import { QueryClientProvider, useQuery } from '@tanstack/react-query'
// import Image from 'next/image'
import Card from './components/card'
import { api } from './services/api'
import { useEffect, useState } from 'react'
import Image from 'next/image'

type Idrink = {
  dateModified: string,
  idDrink: string
  strAlcoholic: string,
  strCategory: string,
  strDrink: string
// strDrinkAlternate
// : 
// null
  strDrinkThumb: string,
// strGlass
// : 
// "Cocktail glass"
// strIBA
// : 
// null
// strImageAttribution
// : 
// null
// strImageSource
// : 
// null
// strIngredient1
// : 
// "Gin"
// strIngredient2
// : 
// "Grand Marnier"
// strIngredient3
// : 
// "Lemon Juice"
// strIngredient4
// : 
// "Grenadine"
// strIngredient5
// : 
// null
// strIngredient6
// : 
// null
// strIngredient7
// : 
// null
// strIngredient8
// : 
// null
// strIngredient9
// : 
// null
// strIngredient10
// : 
// null
// strIngredient11
// : 
// null
// strIngredient12
// : 
// null
// strIngredient13
// : 
// null
// strIngredient14
// : 
// null
// strIngredient15
// : 
// null
// strInstructions
// : 
// "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass."
// strInstructionsDE
// : 
// "Alle Zutaten in einen Cocktailshaker geben, mischen und über Eis in ein gekühltes Glas servieren."
// strInstructionsES
// : 
// "Vierta todos los ingredientes en una coctelera, mezcle y sirva con hielo en un vaso frío."
// strInstructionsFR
// : 
// null
// strInstructionsIT
// : 
// "Versare tutti gli ingredienti in uno shaker, mescolare e servire con ghiaccio in un bicchiere freddo."
// strInstructionsZH-HANS
// : 
// null
// strInstructionsZH-HANT
// : 
// null
// strMeasure1
// : 
// "1 3/4 shot "
// strMeasure2
// : 
// "1 Shot "
// strMeasure3
// : 
// "1/4 Shot"
// strMeasure4
// : 
// "1/8 Shot"
// strMeasure5
// : 
// null
// strMeasure6
// : 
// null
// strMeasure7
// : 
// null
// strMeasure8
// : 
// null
// strMeasure9
// : 
// null
// strMeasure10
// : 
// null
// strMeasure11
// : 
// null
// strMeasure12
// : 
// null
// strMeasure13
// : 
// null
// strMeasure14
// : 
// null
// strMeasure15
// : 
// null
}

export default function Home() {
  const [data, setData] = useState<Idrink[]>([])
  
  useEffect(() => {
    const getByLetter = async () => {
      const response = await api.get('/search.php?f=a')
      setData(response.data.drinks)
      return response.data.drinks;
    }
    getByLetter()
    
  }, [])
  console.log(data)



// const {data} = useQuery({
//   queryKey: ['drinks'],
//   queryFn: getByLetter
// })

  return (
    <main className='bg-newblue-950 h-full flex flex-col items-center justify-center w-full'>
      <div className='flex flex-row w-screen items-center mt-60 flex-wrap justify-center gap-10'>
        {/* <Card/> */}
        {data.length > 0 ? (data.map(({strAlcoholic, strDrink, idDrink, strDrinkThumb}) => (
          <div key={idDrink} className='relative w-[300px] h-[400px] flex justify-center items-center	bg-black before:absolute before:w-[150px] before:h-[140%] before:bg-gradient-to-b from-blue-500 to-fuchsia-800 before:animate-spin-slow overflow-hidden rounded-2xl after:absolute after:inset-1 after:bg-newblue-950 flex-col'>
            <h1 className='text-5xl text-white bold relative z-10'>{strDrink}</h1>
            <p className='text-2xl text-white bold relative z-10'>{strAlcoholic}</p>
            <div  className='w-full relative z-10 flex items-center justify-center'>
              <img src={strDrinkThumb} alt='drink-image' className='w-1/2 h-32'/>
            </div>
          </div>
        )
        ))
        :
        <h1 className='text-white'>Loading ...</h1>
      
      }

      </div>
        {/* <div className='relative w-[300px] h-[400px] flex justify-center items-center	bg-black before:absolute before:w-[150px] before:h-[140%] before:bg-gradient-to-b from-blue-500 to-fuchsia-800 before:animate-spin-slow overflow-hidden rounded-2xl after:absolute after:inset-1 after:bg-blue-950'>
          <h1 className='text-5xl text-white bold relative z-10'>Hello</h1>
        </div> */}
    </main>
  )
}
