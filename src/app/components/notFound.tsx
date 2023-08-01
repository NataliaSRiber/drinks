import Link from "next/link"
import logo1 from '../assets/newlogo.png'
import Image from "next/image"

export default function NotFound() {
  return (
    <div className="w-full h-screen m-0 p-0 box-border flex flex-col items-center justify-center min-h-full md:gap-y-12 gap-y-4 text-center">
      <h1 className="font-bold md:drop-shadow-4xl drop-shadow-3xl text-white md:text-6xl text-4xl">404</h1>
      <h1 className="font-bold md:drop-shadow-4xl drop-shadow-3xl text-white md:text-6xl text-4xl">DRINK NOT FOUND</h1>
      <Image src={logo1} alt="image"/>
      {/* <Link href='/'>
        <button className=" mt-8 bg-greenneon-500 p-2 rounded-md text-newblue-950 font-semibold">
          GO BACK
        </button>
      </Link> */}
    </div>
  )
}