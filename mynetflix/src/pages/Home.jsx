import React from 'react'
import Header from "../components/Header/Header"
import  Banner from "../components/banner/Banner1"
import Footer from "../components/Footer/Footer"

function Home() {
  return (
    <>
     <Header/>
     {<Banner/> }
     <Footer/>
     </>
  )
}

export default Home