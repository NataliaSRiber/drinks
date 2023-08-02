'use client'
import { api } from './services/api'
import Card from './components/card'
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { SearchContext } from './contexts/search-context'
import Loading from './components/loading'
import NotFound from './components/notFound'

export default function Home() {
  const {
    search,
    setSearch,
    clickButton,
    setClickButton,
    filteredDrinks,
    setFilteredDrinks,
  } = useContext(SearchContext)

  const getDrinks = async () => {
    if (filteredDrinks) {
      const response = await api.get(`/filter.php?c=${filteredDrinks}`)
      setClickButton(false)
      setFilteredDrinks('')
      return response.data.drinks
    }

    if (search !== '') {
      const response = await api.get(`/search.php?s=${search}`)
      setClickButton(false)
      setSearch('')
      return response.data.drinks
    }
  }

  const { data: drinks } = useQuery({
    queryKey: ['drinks2'],
    queryFn: getDrinks,
    enabled: clickButton,
  })

  return (
    <main className="mt-44 flex h-full w-full flex-col items-center justify-center bg-newblue-950 py-10">
      {drinks === null && <NotFound />}
      {drinks === undefined && <Loading />}
      <Card drinksData={drinks} />
    </main>
  )
}
