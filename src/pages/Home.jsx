import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Newsletters from '../components/Newsletters'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <BlogList />
      <Newsletters />
      <Footer />
    </>
  )
}
export default Home