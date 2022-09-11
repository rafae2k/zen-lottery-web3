import Image from 'next/image'
import Logo from '../../../public/assets/logo.svg'
import MenuIcon from '@heroicons/react/24/solid/Bars3Icon'
import { useAddress, useDisconnect } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const Header = () => {
  const userAddress = useAddress()
  const disconnectWallet = useDisconnect()
  const router = useRouter()

  const userAddressShort =
    userAddress?.slice(0, 6) + '...' + userAddress?.slice(-4)

  useEffect(() => {
    if (!userAddress) {
      router.push('/login')
    }
  }, [userAddress, router])

  return (
    <header className="container grid items-center grid-flow-row grid-cols-5 px-4 py-4 mx-auto overflow-hidden justify-evenly ">
      <div className="flex items-center col-span-4 space-x-2 sm:col-span-1">
        <div className="relative w-10 h-10 sm:h-16 sm:w-16">
          <Image src={Logo} alt="logo" layout="fill" />
        </div>
        <div>
          <p className="text-xl font-bold sm:text-2xl">Zen Web3 Lottery</p>
          <p>{`User: ${userAddressShort}`}</p>
        </div>
      </div>

      <div className="hidden p-2 space-x-4 rounded sm:col-start-2 sm:col-end-5 sm:inline-flex sm:justify-center">
        <button className="px-3 py-2 font-bold transition-all rounded bg-forest-400 hover:brightness-125 active:scale-95">
          Buy tickets
        </button>
        <button
          className="px-3 py-2 font-bold transition-all rounded bg-forest-600 hover:brightness-125 active:scale-95"
          onClick={disconnectWallet}
        >
          Logout
        </button>
      </div>

      <div className="col-end-6 justify-self-end sm:hidden">
        <MenuIcon className="w-8 h-8" />
      </div>
    </header>
  )
}
