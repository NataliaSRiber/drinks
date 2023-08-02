'use client'
import Image from 'next/image'
import logo from '../assets/logo.png'
import Link from 'next/link'
import { api } from '../services/api'
import { ICategories } from '../interfaces/Drink'
import { useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../contexts/search-context'
import { useRouter } from 'next/navigation'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

export default function Nav() {
  const { search, setSearch, setFilteredDrinks, setClickButton } =
    useContext(SearchContext)
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    // scroll lock quando o menu mobile é aberto.
    open
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto')
  }, [open])

  const getCategories = async () => {
    const response = await api.get<ICategories>('/list.php?c=list')
    return response.data.drinks
  }

  const { data: categories } = useQuery({
    queryKey: ['drinks1'],
    queryFn: getCategories,
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (category: any) => {
    setFilteredDrinks(category.strCategory)
    setClickButton(true)
    router.push('/')
  }
  const handleClick2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setClickButton(true)
    router.push('/')
  }

  return (
    <div className="min-h-100 fixed top-0 z-20 flex w-full flex-col items-center justify-start gap-y-4 bg-newblue-950 shadow-md">
      <div className="top-0 flex w-full flex-col items-center justify-center md:flex-row">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            className="h-[50px] w-[50px] md:h-[100px] md:w-[100px]"
          />
        </Link>
        <form
          className="flex h-16 w-full flex-row items-center justify-center px-2"
          onSubmit={handleClick2}
        >
          <input
            placeholder="Type a cocktail name"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-12 w-10/12 rounded-xl p-2 focus:outline-none md:w-1/2 md:p-4 lg:w-2/3"
          />
          <button
            disabled={!search}
            className="ml-2 flex h-12 cursor-pointer items-center rounded-lg border border-b-4 border-pinkneon-500 p-2 font-medium text-white drop-shadow-3xl hover:border-yellowneon-500 hover:drop-shadow-5xl disabled:cursor-auto disabled:border-white disabled:drop-shadow-none md:p-4"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-full">
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-[5%] top-3 z-10 cursor-pointer text-3xl md:hidden"
        >
          {open && <AiOutlineClose color="white" />}
          {!open && <GiHamburgerMenu color="white" />}
        </div>
        <div
          data-open={open}
          className="fixed left-[-100%] top-0 z-0 flex h-full w-full opacity-0 transition-all duration-300 ease-in data-[open=true]:left-0
            data-[open=true]:opacity-100 md:static md:z-auto md:flex md:opacity-100"
        >
          <ul className="flex w-full flex-col border-y-4 border-blueneon-300 bg-newblue-950 bg-opacity-95 text-white md:h-20 md:flex-row md:items-center md:justify-evenly md:pb-0 md:pl-0">
            {/* <ul className="flex-row text-white border-y-2 border-yellowneon-500 w-full grid gap-4 md:grid-cols-6 md:grid-rows-2 p-2"> */}
            {/* <ul className="flex flex-row text-white border-y-2 border-yellowneon-500 w-full justify-evenly h-20 items-center"> */}
            {categories &&
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              categories.map((category: any, index: number) => (
                <button
                  key={index}
                  className="h-full px-1 text-lg font-bold hover:text-blueneon-300 hover:drop-shadow-8xl"
                  onClick={() => handleClick(category)}
                >
                  {category.strCategory}
                </button>
              ))}
          </ul>
          <div
            className="h-screen w-[20%] bg-transparent md:hidden"
            onClick={() => setOpen(false)}
          ></div>
        </div>
      </div>
    </div>
  )
}
