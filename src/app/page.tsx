'use client'

import Card from './components/card'
import { useQuery } from '@tanstack/react-query'
import { useContext, useState } from 'react'
import { SearchContext } from './contexts/search-context'
import Loading from './components/loading'
import NotFound from './components/notFound'
import { getDrinks } from './lib/drinks'
import Pagination from './components/pagination'

export default function Home() {
  const [drinksPerPage, setDrinksPerPage] = useState<any>([])

  const context = useContext(SearchContext)

  const { data: drinks } = useQuery({
    queryKey: ['drinks2'],
    queryFn: () => getDrinks(context),
    enabled: context.clickButton,
  })

  return (
    <main className="mt-20 flex h-full w-full flex-col items-center justify-center bg-newblue-950 py-16 md:mt-44">
      {drinks === null && <NotFound />}

      {drinks === undefined && <Loading />}

      {drinks && (
        <>
          <Pagination drinks={drinks} setDrinksPerPage={setDrinksPerPage} />
          <Card drinksData={drinksPerPage} />
        </>
      )}
    </main>
  )
}
