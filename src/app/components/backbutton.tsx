import back from '../assets/back_arrow.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function BackButton() {
  return (
    <div className="fixed bottom-2 right-2">
      <Link href="/">
        <button className="flex w-20 cursor-pointer flex-row justify-evenly rounded-lg border border-b-4 border-yellowneon-500 bg-yellowneon-500 p-2 text-newblue-950 drop-shadow-5xl md:w-24">
          <Image src={back} alt="back-arrow" />
          Back
        </button>
      </Link>
    </div>
  )
}
