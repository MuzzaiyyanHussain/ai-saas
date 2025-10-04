import Features from '@/modules/features/page'
import Hero from '@/modules/hero/hero'
import Pricing from '@/modules/pricing/page'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
    </div>
  )
}

export default Page