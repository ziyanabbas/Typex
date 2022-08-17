import React from 'react'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
const TypingChallengeContainer = () => {
  return (
    <div className='typing-challenge-container'>
        <div className='details-container'>
            <ChallengeDetailsCard />
            <ChallengeDetailsCard />
            <ChallengeDetailsCard />
        </div>
        <div className='typeWriter-container'>
            <TypingChallenge />
        </div>
    </div>
  )
}

export default TypingChallengeContainer