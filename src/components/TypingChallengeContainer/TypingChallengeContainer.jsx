import React from 'react'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
import "./TypingChallengeContainer.css"
const TypingChallengeContainer = ({ selectedParagraph,
  testInfo,
  onInputChange,
  words,
  characters,
  wpm,
  timerStarted,
  timeRemaining, }) => {
  return (
    <div className='typing-challenge-container'>
      <div className='details-container'>
        <ChallengeDetailsCard cardName="characters" cardValue={characters} />
        <ChallengeDetailsCard cardName="words" cardValue={words} />
        <ChallengeDetailsCard cardName="speed" cardValue={wpm} />
      </div>
      <div className='typewriter-container'>
        <TypingChallenge
          selectedParagraph={selectedParagraph}
          testInfo={testInfo}
          onInputChange={onInputChange}
          words={words}
          characters={characters}
          wpm={wpm}
          timerStarted={timerStarted}
          timeRemaining={timeRemaining}
        />
      </div>
    </div>
  )
}

export default TypingChallengeContainer