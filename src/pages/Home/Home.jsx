import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import Carousel from '../../components/Carousel/Carousel'
import HeroSection from '../../components/HeroSection/HeroSection'
import Content from '../Content/Content'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home-part'>

    <NavBar></NavBar>
    <Carousel></Carousel>
    <HeroSection></HeroSection>
    <Content></Content>
    <Footer></Footer>
    </div>
  )
}

export default Home