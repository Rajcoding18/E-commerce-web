import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offer/Offers'
import NewCollection from '../components/NewCollection/NewCollection'
import NewsLetter from '../components/NewsLetter/NewsLetter'
// import Product from './Product'


const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular />
        <Offers />
        <NewCollection />
        <NewsLetter />
        {/* <Product /> */}
    </div>
  )
}

export default Shop