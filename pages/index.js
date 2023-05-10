import Image from 'next/image'
import Head from 'next/head'
import Hero from '@component/components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Angelika Manalang</title>
      </Head>
    
      <Hero/>
    </div>
    
  )
}
