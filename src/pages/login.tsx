import { useAddress, useMetamask } from '@thirdweb-dev/react'
import { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import MetamaskLogo from '../../public/assets/metamask-fox.svg'
import Logo from '../../public/assets/logo.svg'
import { useEffect, useState } from 'react'

const Login: NextPage = () => {
  const connectWallet = useMetamask()
  const userAddress = useAddress()
  const router = useRouter()
  const [isConnecting, setIsConnecting] = useState(false)

  const handleConnectWallet = async () => {
    setIsConnecting(true)
    setTimeout(async () => {
      await connectWallet()
    }, 2000)
  }

  useEffect(() => {
    if (userAddress) {
      router.push('/')
    }
  }, [userAddress, router])

  return (
    <div className="container grid h-screen gap-10 mx-auto place-content-center">
      <div className="flex flex-col justify-center gap-3">
        <Image src={Logo} alt="logo" width={100} height={100} />
        <h1 className="text-4xl font-bold text-center">Zen Lottery</h1>
        <p className="text-center">Start winning on web3!</p>
      </div>

      <button
        onClick={handleConnectWallet}
        className="flex items-center justify-center px-3 py-2 font-bold text-orange-600 transition-all rounded hover:ring-offset-3 bg-slate-100 hover:ring-2 hover:ring-orange-500 active:scale-95"
      >
        {isConnecting ? (
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 mr-3 -ml-1 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </div>
        ) : (
          <div className="flex items-center gap-2 ">
            <Image
              src={MetamaskLogo}
              width={20}
              height={20}
              alt="Metamask Fox Logo"
            />
            Connect your Wallet
          </div>
        )}
      </button>
    </div>
  )
}

export default Login
