import Image from 'next/image'
import Logo from '../../../public/assets/logo.svg'
import MenuIcon from '@heroicons/react/24/solid/Bars3Icon'

export const Header = () => {
  return (
    <header className="p-4 items-center justify-evenly grid overflow-hidden grid-cols-5 grid-flow-row">
      <div className="flex col-span-4 sm:col-span-1 items-center space-x-2">
        <div className="relative w-10 h-10 sm:w-16 sm:h-16">
          <Image src={Logo} alt="logo" layout="fill" />
        </div>
        <div>
          <p className="font-bold text-xl sm:text-2xl">Zen Web3 Lottery</p>
          <p>User: ...</p>
        </div>
      </div>

      <div className="space-x-4 hidden sm:inline-flex sm:justify-center p-2 rounded  sm:col-start-2 sm:col-end-5">
        <button className="py-2 px-3 bg-forest-400 rounded font-bold">
          Buy tickets
        </button>
        <button className="py-2 px-3 bg-forest-400 rounded font-bold">
          Logout
        </button>
      </div>

      <div className="col-end-6 justify-self-end">
        <MenuIcon className="h-8 w-8" />
      </div>
    </header>
  )
}
