import React from 'react'
import "./Home.css"
import Hero from "../../components/Hero/Hero"
import AboutUs from '../../components/AboutUs/AboutUs'
import Title from '../../components/Title/Title'
import Features from '../../components/Features/Features'
import Membership from '../../components/Membership/Membership'

const Home = ({ setShowLogin, setIsLogin }) => {
  return (
    <div className='home'>
        <Hero setIsLogin={setIsLogin} setShowLogin={setShowLogin}/>
        <AboutUs />
        <hr />
        <Title subTitle="features" title="What We Offer" />
        <Features />
        <hr />
        <Title subTitle="Become a Member of Book Haven Library" title="Join Us!" />
        <Membership setIsLogin={setIsLogin} setShowLogin={setShowLogin}/>
    </div>
  )
}

export default Home
