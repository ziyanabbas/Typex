import React from 'react'
import ChallengeSection from '../ChallengeSection/ChallengeSection'
import Footer from '../Footer/Footer'
import Landing from '../Landing/Landing'
import Navbar from '../Navbar/Navbar'
export class App extends React.Component{
 render() { 
  return (
    <div className='app'>
        <Navbar />
        <Landing />
        <ChallengeSection />
        <Footer />
    </div>
  )
}
}

export default App
