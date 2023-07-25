'use client'
import { api } from './services/api'
import Card from './components/card'
import { useQuery } from '@tanstack/react-query'
import { useContext } from "react";
import { SearchContext } from './contexts/search-context'

export default function Home() {
  const { search, setSearch, clickButton, setClickButton, filteredDrinks, setFilteredDrinks } = useContext(SearchContext)


  console.log(search);
  console.log(filteredDrinks);
  console.log(clickButton);
  
  const getDrinks = async () => {
    if(filteredDrinks) {
      const response = await api.get<any>(`/filter.php?c=${filteredDrinks}`)
      setClickButton(false)
      setFilteredDrinks('')
      return response.data.drinks
    }

    if(search !== '') {
      const response = await api.get<any>(`/search.php?s=${search}`)
      setClickButton(false)
      setSearch('')  
      return response.data.drinks
    }
  }

  const { data: drinks } = useQuery({
    queryKey: [ "drinks2" ],
    queryFn: getDrinks,
    enabled: clickButton
  });

  return (
      <main className='bg-newblue-950 h-full flex flex-col items-center justify-center w-full py-10 mt-44'>
        <Card drinksData={drinks}/>
      </main>
  )
}
