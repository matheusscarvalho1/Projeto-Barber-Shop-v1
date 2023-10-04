//import { useState } from 'react'
import Head from 'next/head'
import styles from '@/styles/index.module.css'


import Homepage from './components/homepage/Homepage'
import About from './components/about/About'
import Services from './components/works/Services'
import Appointment from './components/appointment/appointment'
import Gallery from './components/gallery/Gallery'
import Map from './components/map/Map'



export default function Home() { 
  return (
    <>  
      <Head>
        <title>Barber Shop: O melhor lugar para cuidar do seu estilo</title>
        <meta name="description" content="BarberShop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Homepage />
      <About />
      <Services />
      <Appointment />
      <Gallery />
      <Map />   
    </>
  )
}
