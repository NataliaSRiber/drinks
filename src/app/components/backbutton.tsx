import back from '../assets/back_arrow.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function BackButton () {
  return(
    <div className='fixed bottom-2 right-2'>
      <Link href='/'>
        <button className='text-newblue-950 flex flex-row border-b-4 border border-yellowneon-500 bg-yellowneon-500 drop-shadow-5xl p-2 rounded-lg justify-evenly md:w-24 w-20 cursor-pointer'>
          <Image src={back} alt='back-arrow'/>
          Back
        </button>
    </Link>
    </div>
  )
}