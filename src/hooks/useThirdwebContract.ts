import { useContract, useContractData } from '@thirdweb-dev/react'

export const useThirdwebContract = (name: string) => {
  const { contract } = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)
  const { ...rest } = useContractData(contract, name)

  return rest
}
