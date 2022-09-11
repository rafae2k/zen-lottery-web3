import { useContract } from '@thirdweb-dev/react'
import { ThreeDots } from '@agney/react-loading'
import { NextDrawCard } from 'components/NextDrawCard'
import { BuyTicketCard } from 'components/BuyTicketCard'

export const Main = () => {
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
  )

  return (
    <main className="container px-4 sm:mx-auto">
      {isLoading ? (
        <div className="grid pt-40 place-content-center">
          <ThreeDots width="50" />
        </div>
      ) : (
        <div className="flex flex-col justify-center max-w-2xl gap-2 sm:flex-row">
          <NextDrawCard />
          <BuyTicketCard />
        </div>
      )}
    </main>
  )
}
