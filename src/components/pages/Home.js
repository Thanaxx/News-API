import React from 'react'
import Hero from '../elements/Hero'
import JoinUs from '../elements/Join'
import More from '../elements/MoreBtn'
import Newspage from '../elements/Newspage'

function Home() {
  return (
    <>
        <Hero/>
        <Newspage />
        <More />
        <JoinUs />
    </>
  )
}

export default Home