import { useContract, useContractData } from '@thirdweb-dev/react'
import { CountDownTimer } from 'components/CountDownTimer'
import { useEffect } from 'react'
import { formatCurrency } from 'utils/formatCurrency'

export const NextDrawCard = () => {
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)
  const { data: currentWinningReward } = useContractData(
    contract,
    'CurrentWinningReward'
  )
  const { data: remainingTickets } = useContractData(
    contract,
    'RemainingTickets'
  )

  return (
    <div className="flex flex-col justify-center flex-1 gap-4 p-4 text-center border rounded border-forest-500">
      <h1 className="text-4xl font-bold">Next Draw</h1>

      {/* Upper block */}
      <div className="flex gap-2">
        {/* Total Pool */}
        <div className="w-full p-4 border rounded border-forest-500">
          <p>Total Prize</p>
          <p>
            {currentWinningReward &&
              `${formatCurrency(currentWinningReward)} MATIC`}
          </p>
        </div>

        {/* Tickets remaining */}
        <div className="w-full p-4 border rounded border-forest-500">
          <p>Remaining</p>
          <p>{`${remainingTickets?.toNumber()} tickets`}</p>
        </div>
      </div>

      {/* Lower block */}
      <CountDownTimer />
    </div>
  )
}
