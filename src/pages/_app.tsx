import 'styles/globals.css'

import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zen Lottery - Web3</title>
        <meta name="description" content="Zen Lottery - Web3" />
      </Head>
      <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
        <Toaster />
        <Component {...pageProps} />
      </ThirdwebProvider>
    </>
  )
}

export default MyApp
