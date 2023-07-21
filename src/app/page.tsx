'use client'
import { api } from './services/api'
import { IFilteredDrinksList, Idrink } from './interfaces/Drink'
import Card from './components/card'
import { useQuery } from '@tanstack/react-query'

export default function Home() {
  
  const getByFilter = async () => {
    const response = await api.get<IFilteredDrinksList>('filter.php?c=Ordinary_Drink')
     return response.data.drinks;
  }
  
  const {data}  = useQuery({
    queryKey: ['filteredDrinks'],
    queryFn: getByFilter
  })

  return (
      <main className='bg-newblue-950 h-full flex flex-col items-center justify-center w-full py-10'>
        <Card drinksData={data}/>
      </main>
  )
}
