import Image from "next/image";
import logo from '../assets/newlogo.png'
import Link from "next/link";

export default function Nav() {
  return (       
    <div className='w-full flex items-center justify-start fixed top-0 h-40 shadow-md bg-newblue-950 z-20 flex-col'>
      <div className="flex items-start w-full top-0">
        <Link href='/'>
          <Image src={logo} alt="logo" width={100} height={100}/>
        </Link>
      </div>
      <input placeholder='Search' className='w-1/2 h-8 rounded-lg px-4 py-2 lg:w-2/3'/>
    </div>
  )
}