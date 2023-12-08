import { api } from '../services/api'

export async function getDrinks(context: any) {
  const { filteredDrinks, search, setClickButton, setSearch } = context

  if (search) {
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

  try {
    const {
      data: { drinks },
    } = await api.get(`/filter.php?c=${filteredDrinks}`)
    setClickButton(false)

    return drinks
  } catch (error) {
    console.error(error)
  }
}
