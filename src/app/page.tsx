'use client'
import { api } from './services/api'
import { useEffect, useState } from 'react'
import { Idrink } from './interfaces/Drink'
import Card from './components/card'

export default function Home() {
  const [drinksData, setDrinksData] = useState<Idrink[]>([])
  
  useEffect(() => {
    const getByLetter = async () => {
      const response = await api.get('/search.php?f=a')
      setDrinksData(response.data.drinks)
      return response.data.drinks;
    }
    getByLetter()    
  }, [])

  return (
    <main className='bg-newblue-950 h-full flex flex-col items-center justify-center w-full py-10'>
      <Card drinksData={drinksData}/>
    </main>
  )
}
