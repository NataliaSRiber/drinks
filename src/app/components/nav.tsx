"use client"
import Image from "next/image";
import logo from '../assets/logo1.png'
import Link from "next/link";
import { api } from "../services/api";
import { ICategories } from "../interfaces/Drink";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { SearchContext } from "../contexts/search-context";
import { useRouter } from "next/navigation";

export default function Nav() {
  const { search, setSearch, setFilteredDrinks, setClickButton  } = useContext(SearchContext)
  const router = useRouter()

  const getCategories = async () => {
    const response = await api.get<ICategories>('/list.php?c=list')
    return response.data.drinks
  }

  const { data: categories } = useQuery({
    queryKey: ["drinks1"],
    queryFn: getCategories,
  });

  const handleClick = (category: any) => {
    setFilteredDrinks(category.strCategory)
    setClickButton(true)
    router.push('/')
  }
  const handleClick2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClickButton(true)
    router.push('/');
  }

  return (       
    <div className='w-full flex items-center justify-start fixed top-0 h-100 shadow-md bg-newblue-950 z-20 flex-col gap-y-4'>
      <div className="flex w-full top-0 md:flex-row items-center justify-center flex-col">
        <Link href='/'>
          <Image src={logo} alt="logo" className="md:w-[100px] md:h-[100px] w-[50px] h-[50px]"/>
        </Link>
        <form className="w-full h-16 flex flex-row items-center justify-center px-2" onSubmit={handleClick2}>
          <input placeholder='Type a cocktail name'
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='md:w-1/2 w-10/12 h-12 rounded-xl p-4 lg:w-2/3 focus:outline-none'/>
          <button
            disabled={!search}
            className="flex disabled:drop-shadow-none disabled:border-white disabled:cursor-auto drop-shadow-4xl text-white border-b-4 border border-pinkneon-500 hover:drop-shadow-6xl hover:border-yellowneon-500 p-4 rounded-lg cursor-pointer ml-2 h-12 items-center"
            type="submit"   
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-full">
        <ul className="flex flex-row text-white border-b-4 border border-yellowneon-500 w-full justify-evenly h-20 items-center">
          {categories && categories.map((category: any, index: number )=> 
          <button key={index} className="h-full px-1 hover:text-yellowneon-500 hover:drop-shadow-5xl font-bold" onClick={()=> handleClick(category)}>{category.strCategory}</button>
          )}
        </ul>
      </div>
    </div>
  )
}