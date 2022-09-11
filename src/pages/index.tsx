import { Header } from 'components/Header'
import { Main } from 'components/Main'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <hr className="mb-10 border-b border-forest-500 text-forest-50" />
      <Main />
    </div>
  )
}

export default Home
