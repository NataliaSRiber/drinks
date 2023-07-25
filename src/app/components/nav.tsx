"use client"
import Image from "next/image";
import logo from '../assets/newlogo.png'
import Link from "next/link";
import { api } from "../services/api";
import { ICategories } from "../interfaces/Drink";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
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
    router.push('/');
    setTimeout(() => {
      setFilteredDrinks('')     
    }, 500);

  }
  const handleClick2 = () => {
    setClickButton(true)
    if(search) {
      router.push('/');
    }
    setTimeout(() => {
      setSearch('')     
    }, 500);
  }

  return (       
    <div className='w-full flex items-center justify-start fixed top-0 h-100 shadow-md bg-newblue-950 z-20 flex-col gap-y-4'>
      <div className="flex w-full top-0 flex-row items-center justify-center">
        <Link href='/'>
          <Image src={logo} alt="logo" width={100} height={100}/>
        </Link>
      <div className="w-full h-16 flex flex-row items-center justify-center">
        <input placeholder='Type a cocktail name'
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='md:w-1/2 w-10/12 h-12 rounded-xl p-4 lg:w-2/3'/>
        <button 
          className="flex text-white border-b-4 border border-fuchsia-800 hover:border-blue-500 p-4 rounded-lg cursor-pointer ml-2 h-12 items-center"
          onClick={handleClick2}        
        >Search</button>
      </div>
      </div>
      <div className="w-full">
        <ul className="flex flex-row text-white border-b-4 border border-blue-500 w-full justify-around h-20 items-center">
          {categories && categories.map((category: any, index: number )=> 
          <button key={index} className="h-full px-1" onClick={()=> handleClick(category)}>{category.strCategory}</button>
          )}
        </ul>
      </div>
    </div>
  )
}