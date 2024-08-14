import React from 'react'
import Hero from '../component/Hero/Hero'
import Popular from '../component/Popular/Popular'
import Offers from '../component/Offers/Offers'
import NewCollections from '../component/NewCollection/NewCollections'
import NewsLetter from '../component/NewsLetter/NewsLetter'




export default function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
     <Offers/>
     <NewCollections/>
     <NewsLetter/>
    
    </div>
  )
}
