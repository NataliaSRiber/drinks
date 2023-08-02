'use client'
import { ReactNode, createContext, useState } from 'react'

export const SearchContext = createContext({
  search: '',
  setSearch: (value: string) => {},
  clickButton: true,
  setClickButton: (value: boolean) => {},
  filteredDrinks: 'Ordinary Drink',
  setFilteredDrinks: (value: string) => {},
})

interface ProviderProps {
  children: ReactNode
}

export function SearchContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState('')
  const [clickButton, setClickButton] = useState(true)
  const [filteredDrinks, setFilteredDrinks] = useState('Ordinary Drink')

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        clickButton,
        setClickButton,
        filteredDrinks,
        setFilteredDrinks,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
