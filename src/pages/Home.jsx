/** @format */

import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Popular from '../components/Popular'
import Categories from '../components/Categories'
import Utilization from '../components/Utilization'

function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Popular />
      <Categories />
      <Utilization />
    </div>
  )
}

export default Home
