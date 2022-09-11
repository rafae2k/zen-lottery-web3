import { useThirdwebContract } from 'hooks/useThirdwebContract'
import Countdown from 'react-countdown'

type renderProps = {
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}

export const CountDownTimer = () => {
  const { data: expiration } = useThirdwebContract('expiration')

  const render = ({ hours, minutes, seconds, completed }: renderProps) => {
    return (
      <div className="flex flex-col justify-center gap-2">
        {completed ? (
          <p className="animate-bounce">
            Tickets are now CLOSED for this Draw!
          </p>
        ) : (
          <p className="animate-bounce">Tickets are now OPEN for this Draw!</p>
        )}

        <div className="flex justify-center gap-2">
          <div className="text-center">
            <div className="grid w-20 h-20 p-4 rounded place-content-center bg-forest-500">
              {hours}
            </div>
            <p>Hours</p>
          </div>
          <div className="text-center">
            <div className="grid w-20 h-20 p-4 rounded place-content-center bg-forest-500">
              {minutes}
            </div>
            <p>Minutes</p>
          </div>
          <div className="text-center">
            <div className="grid w-20 h-20 p-4 rounded place-content-center bg-forest-500">
              {seconds}
            </div>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Countdown date={new Date(expiration * 1000)} renderer={render} />
    </div>
  )
}
