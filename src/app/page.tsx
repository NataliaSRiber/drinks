'use client'

import Card from './components/card'
import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { SearchContext } from './contexts/search-context'
import Loading from './components/loading'
import NotFound from './components/notFound'
import { getDrinks, pagination } from './lib/drinks'
import Button from './components/button'

export default function Home() {
  const [page, setPage] = useState<number>(1)
  const [elementsPerPage, setElementsPerPage] = useState<number>(10)
  const [drinks, setDrinks] = useState<any>([])
  const context = useContext(SearchContext)

  const { data: allDrinks } = useQuery({
    queryKey: ['drinks2'],
    queryFn: () => getDrinks(context),
    enabled: context.clickButton,
  })

  const numberOfPages = Math.ceil(allDrinks?.length / elementsPerPage)

  useEffect(() => {
    if (allDrinks) {
      setDrinks(pagination(allDrinks, page))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  useEffect(() => {
    if (allDrinks) {
      setDrinks(pagination(allDrinks, page))
      setPage(1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDrinks])

  function togglePage(info: string | number) {
    console.log(allDrinks.length, numberOfPages)

    if (info === 'prev') {
      return setPage(page - 1)
    }

    if (info === 'next') {
      return setPage(page + 1)
    }

    if (typeof info === 'number') {
      setPage(info)
    }
  }

  return (
    <main className="mt-44 flex h-full w-full flex-col items-center justify-center bg-newblue-950 py-10">
      {allDrinks === null && <NotFound />}

      {allDrinks === undefined && <Loading />}

      {allDrinks && (
        <>
          <div className="flex gap-5 ">
            <Button
              disabled={page === 1}
              type="button"
              onClick={() => togglePage('prev')}
              className="border-pinkneon-500 text-xl opacity-100 drop-shadow-3xl hover:border-yellowneon-500 hover:drop-shadow-5xl disabled:border-white disabled:drop-shadow-none"
            >
              Prev
            </Button>
            {Array.from({ length: numberOfPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <div
                  key={pageNumber}
                  className="flex items-center justify-center"
                >
                  <button
                    data-page={pageNumber === page}
                    className="text-white hover:drop-shadow-3xl data-[page=true]:text-lg data-[page=true]:font-extrabold data-[page=true]:drop-shadow-3xl"
                    onClick={() => togglePage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </div>
              ),
            )}
            <Button
              disabled={page >= numberOfPages}
              type="button"
              onClick={() => togglePage('next')}
              className="border-pinkneon-500 text-xl opacity-100 drop-shadow-3xl hover:border-yellowneon-500 hover:drop-shadow-5xl disabled:border-white disabled:drop-shadow-none"
            >
              Next
            </Button>
          </div>

          <Card drinksData={drinks} />
        </>
      )}
    </main>
  )
}
