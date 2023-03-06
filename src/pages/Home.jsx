/** @format */

import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import Popular from '../components/Popular'
import Categories from '../components/Categories'
import Utilization from '../components/Utilization'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Popular />
      <Categories />
      <Utilization />
      <Footer />
    </div>
  )
}

export default Home
