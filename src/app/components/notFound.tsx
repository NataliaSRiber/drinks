import logo1 from '../assets/newlogo.png'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="absolute left-1/2 top-[70%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
      {/* <h1 className="font-bold md:drop-shadow-4xl drop-shadow-3xl text-white md:text-6xl text-4xl">404</h1> */}
      <h1 className="top- relative whitespace-nowrap text-xl font-bold text-white drop-shadow-3xl sm:text-4xl md:drop-shadow-4xl xl:text-6xl">
        DRINKS NOT FOUND
      </h1>
      <Image
        src={logo1}
        alt="image"
        className="max-w-[180px] sm:max-w-[240px] xl:max-w-[300px]"
      />
      {/* <Link href='/'>
        <button className=" mt-8 bg-greenneon-500 p-2 rounded-md text-newblue-950 font-semibold">
          GO BACK
        </button>
      </Link> */}
    </div>
  )
}
