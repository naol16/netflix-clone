import React from 'react'
import Header from "../components/Header/Header"
import  Banner from "../components/banner/Banner1"
import  RowList from "../components/rows/rowlist/RowList"
import Footer from "../components/Footer/Footer"

function Home() {
  return (
    <>
     <Header/>
     <Banner/> 
     <RowList/>
     <Footer/>
     </>
  )
}

export default Home