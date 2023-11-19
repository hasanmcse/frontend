import React from 'react'
import AppNavBar from '../components/AppNavBar'

import Footer from '../components/footer/Footer'
import TeamMember from '../components/team/TeamMember'
import NewsLetter from "../components/newsletter/NewsLetter"






const TeamPage = () => {

  return (
    <div>
      <AppNavBar/>
      <TeamMember/>
      <NewsLetter/>
      <Footer/>
    </div>

    
  )

  
}

export default TeamPage