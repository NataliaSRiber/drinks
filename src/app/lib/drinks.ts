import { api } from '../services/api'

export function pagination(drinks: any, page = 1, elementsPerPage = 10) {
  const finalElement = page * elementsPerPage
  const initialElement = finalElement - elementsPerPage
  return drinks.slice(initialElement, finalElement)
}

export async function getDrinks(context: any) {
  const {
    filteredDrinks,
    search,
    setClickButton,
    setFilteredDrinks,
    setSearch,
  } = context

  if (filteredDrinks) {
    try {
      const {
        data: { drinks },
      } = await api.get(`/filter.php?c=${filteredDrinks}`)
      setClickButton(false)
      setFilteredDrinks('')
      return drinks
    } catch (error) {
      console.error(error)
    }
  }

  if (search !== '') {
    try {
      const {
        data: { drinks },
      } = await api.get(`/search.php?s=${search}`)
      setClickButton(false)
      setSearch('')
      return drinks
    } catch (error) {
      console.error(error)
    }
  }
}
