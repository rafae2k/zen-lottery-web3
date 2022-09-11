import {
  useContract,
  useContractCall,
  useContractData
} from '@thirdweb-dev/react'
import { useState } from 'react'
import { formatCurrency } from 'utils/formatCurrency'
import toast from 'react-hot-toast'
import { parseEther } from 'ethers/lib/utils'

export const BuyTicketCard = () => {
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)
  const { data: expiration } = useContractData(contract, 'expiration')
  const { data: commission } = useContractData(contract, 'ticketCommission')
  const { data: ticketPrice } = useContractData(contract, 'ticketPrice')
  const { mutateAsync: BuyTickets, isLoading: isLoadingBuyTickets } =
    useContractCall(contract, 'BuyTickets')
  const [tickets, setTickets] = useState(0)

  const total =
    ticketPrice && commission
      ? tickets * Number(formatCurrency(ticketPrice)) +
        Number(formatCurrency(commission)) +
        commission
      : 0

  const handleBuyTickets = async () => {
    if (!ticketPrice) return

    const notification = toast.loading('Buying tickets...')

    try {
      await BuyTickets([
        {
          value: parseEther(
            String(tickets * Number(formatCurrency(ticketPrice)))
          )
        }
      ])

      toast.success(`Tickets bought!`, {
        id: notification
      })
    } catch (error) {
      toast.error('Whoops! Something went wrong. Please try again.'),
        {
          id: notification
        }
    }
  }

  return (
    <div className="flex flex-col justify-center flex-1 gap-6 p-4 border rounded border-forest-500">
      <div className="flex justify-between">
        <p>Price per ticket</p>
        <p>{`${ticketPrice && formatCurrency(ticketPrice)} MATIC`}</p>
      </div>

      {/* TICKET AMOUNT INPUT */}
      <div className="flex px-3 py-2 transition-all border rounded border-forest-500 focus-within:ring-2 focus-within:ring-forest-100">
        <label htmlFor="ticketAmount">Tickets</label>
        <input
          onChange={(e) => setTickets(Number(e.target.value))}
          placeholder="1"
          id="ticketAmount"
          type="number"
          className="w-full bg-transparent outline-none text-end"
        />
      </div>

      {/* BUY INFO */}
      <div>
        <div className="flex justify-between">
          <p className="font-bold text-forest-200">Total of tickets</p>
          <p className="font-bold text-forest-200">
            {ticketPrice &&
              `${(Number(formatCurrency(ticketPrice)) * tickets).toFixed(
                3
              )} MATIC`}
          </p>
        </div>

        <div className="flex justify-between mt-3 italic font-thin text-forest-100">
          <p className="italic text-forest-100">Service fees</p>
          <p className="italic text-forest-100">{`${
            commission &&
            (Number(formatCurrency(commission)) * tickets).toFixed(3)
          } MATIC`}</p>
        </div>

        <div className="flex justify-between italic font-thin text-forest-100">
          <p>Network fees</p>
          <p>TBC</p>
        </div>
      </div>

      {/* Buy Button */}
      <button
        onClick={handleBuyTickets}
        disabled={expiration && expiration.toString() < Date.now().toString()}
        className={`h-14 w-full rounded bg-forest-300 font-bold transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:bg-gray-600`}
      >
        {isLoadingBuyTickets
          ? 'Loading...'
          : `Buy ${tickets} Ticket(s) for ${total} MATIC`}
      </button>
    </div>
  )
}
