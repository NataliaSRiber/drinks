import { IFilteredDrinks} from "../interfaces/Drink";
import { useRouter } from "next/navigation";
import Loading from "./loading";
import NotFound from "./notFound";

export interface IAppProps{
  drinksData?: IFilteredDrinks[]
}

export default function Card({drinksData}: IAppProps) {
  const router = useRouter()

  const goToDrinkDetails = (id: string) => {
    router.push(`/details/${id}`);
  }
  
  return (       
    <div className='flex flex-row w-screen items-center flex-wrap justify-center gap-10 pt-12'>
    {drinksData?.map(({strDrink, idDrink, strDrinkThumb}) => (
      <div key={idDrink} className='relative w-[260px] md:w-[300px] h-[450px] flex justify-evenly items-center bg-black before:absolute before:w-[150px] before:h-[140%] before:bg-gradient-to-b from-blueneon-500 to-pinkneon-500 before:animate-spin-slow overflow-hidden rounded-2xl after:absolute after:inset-1 after:bg-newblue-950 flex-col gap-y-4'>
        <h1 className='md:text-3xl text-2xl text-white bold relative z-10 font-bold w-full text-center px-3'>{strDrink}</h1>
        <div  className='w-full relative z-10 flex items-center justify-center'>
          <img src={strDrinkThumb} alt='drink-image' className='w-1/2 h-32 rounded-lg'/>
        </div>
        <div className='flex items-center justify-center z-10 rounded-lg p-2 mt-4 border-b-4 border border-purpleneon-500'>
          <button onClick={() => goToDrinkDetails(idDrink)} className='text-white font-semibold md:text-lg text-base cursor-pointer drop-shadow-9xl bg-purpleneon-500 opacity-90 hover:opacity-100'>More informations</button>
        </div>
      </div>
    )
    )
  }
  </div>
  )
}