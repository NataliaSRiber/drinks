import React, { ChangeEvent, useEffect, useState } from 'react'
import Button from './button'

function getPageElements(drinks: any, page: number, elementsPerPage: number) {
  const finalElement = page * elementsPerPage
  const initialElement = finalElement - elementsPerPage
  return drinks.slice(initialElement, finalElement)
}

export default function Pagination(props: any) {
  const { drinks, setDrinksPerPage } = props

  const [page, setPage] = useState<number>(1)
  const [elementsPerPage, setElementsPerPage] = useState<number>(10)

  const numberOfPages = Math.ceil(drinks.length / elementsPerPage)

  useEffect(() => {
    if (drinks) {
      setDrinksPerPage(getPageElements(drinks, page, elementsPerPage))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, elementsPerPage])

  useEffect(() => {
    if (drinks) {
      setDrinksPerPage(getPageElements(drinks, page, elementsPerPage))
      setPage(1)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drinks])

  function togglePage(info: number | string) {
    switch (info) {
      case 'prev':
        setPage(page - 1)
        break
      case 'next':
        setPage(page + 1)
        break
      default:
        setPage(Number(info))
    }
  }

  function onChange(e: ChangeEvent<HTMLSelectElement>) {
    setPage(Number(e.target.value))
    e.target.value = ''
  }

  function onChange2(e: ChangeEvent<HTMLSelectElement>) {
    setElementsPerPage(Number(e.target.value))
    setPage(1)
  }

  const numberOfPagesArray = Array.from(
    { length: numberOfPages },
    (_, index) => index + 1,
  )

  return (
    <div className="flex flex-col items-center gap-10 md:flex-row">
      <div className="grid grid-cols-2 grid-rows-2 items-center justify-center gap-5 sm:flex sm:flex-row">
        <Button
          disabled={page === 1}
          type="button"
          onClick={() => togglePage('prev')}
          className="border-pinkneon-500 text-xl opacity-100 drop-shadow-3xl hover:border-yellowneon-500 hover:drop-shadow-5xl disabled:border-white disabled:drop-shadow-none"
        >
          Prev
        </Button>
        <div className="col-span-2 row-start-2 flex items-center justify-center gap-5">
          {numberOfPagesArray.map((pageNumber) => {
            if (numberOfPages > 6) {
              if (pageNumber > 5 && pageNumber < numberOfPages) return <></>

              return (
                <div
                  key={pageNumber}
                  className="flex items-center justify-center"
                >
                  {pageNumber === 5 ? (
                    <select
                      id="page-select"
                      onChange={(e) => onChange(e)}
                      data-page={page >= 5 && page < numberOfPages}
                      className="w-6 cursor-pointer appearance-none border-newblue-950 bg-newblue-950 text-center text-2xl text-white focus:bg-newblue-950 focus:outline-none data-[page=true]:text-pinkneon-500"
                    >
                      <option value="" selected hidden>
                        ...
                      </option>
                      {numberOfPagesArray
                        .slice(4, numberOfPagesArray.length - 1)
                        .map((n) => (
                          <option
                            key={n}
                            value={n}
                            data-page={n === page}
                            className="text-lg text-white data-[page=true]:font-extrabold data-[page=true]:text-pinkneon-500"
                          >
                            {n}
                          </option>
                        ))}
                    </select>
                  ) : (
                    <button
                      data-page={pageNumber === page}
                      className=" text-white hover:drop-shadow-3xl data-[page=true]:text-lg data-[page=true]:font-extrabold data-[page=true]:drop-shadow-3xl"
                      onClick={() => togglePage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  )}
                </div>
              )
            }
            return (
              <div
                key={pageNumber}
                className="flex items-center justify-center"
              >
                <button
                  data-page={pageNumber === page}
                  className=" text-white hover:drop-shadow-3xl data-[page=true]:text-lg data-[page=true]:font-extrabold data-[page=true]:drop-shadow-3xl"
                  onClick={() => togglePage(pageNumber)}
                >
                  {pageNumber}
                </button>
              </div>
            )
          })}
        </div>

        <Button
          disabled={page >= numberOfPages}
          type="button"
          onClick={() => togglePage('next')}
          className=" border-pinkneon-500 text-xl opacity-100 drop-shadow-3xl hover:border-yellowneon-500 hover:drop-shadow-5xl disabled:border-white disabled:drop-shadow-none"
        >
          Next
        </Button>
      </div>

      <h1 className="text-xl font-extrabold text-white drop-shadow-3xl md:absolute md:left-5 lg:left-10">
        Cocktails: {drinks.length}
      </h1>

      <label
        htmlFor="elements-per-page"
        className=" flex gap-2 text-lg text-white drop-shadow-3xl md:absolute md:right-5 lg:right-10"
      >
        Cocktails per page:
        <select
          onChange={(e) => onChange2(e)}
          className="cursor-pointer rounded-lg border-2 border-white bg-newblue-950 text-center text-white focus:bg-newblue-950 focus:outline-none"
        >
          <option value="10" selected>
            10
          </option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </label>
    </div>
  )
}
