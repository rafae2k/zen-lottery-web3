import { formatEther } from 'ethers/lib/utils'

export const formatCurrency = (value: number) => {
  return formatEther(value)
}
