import React from 'react';
import TestContainer from '../TestContainer/TestContainer'
import "./ChallengeSection.css"
const ChallengeSection = ({
  selectedParagraph,
  testInfo,
  onInputChange,
  words,
  characters,
  wpm,
  timerStarted,
  timeRemaining,
  startAgain,

}) => {
  return (
    <div className='challenge-section-container'>
      <h1 data-aos="fade-down" className='challenge-section-header'>Take a Speed Test Now!</h1>
      <TestContainer
        selectedParagraph={selectedParagraph}
        testInfo={testInfo}
        onInputChange={onInputChange}
        words={words}
        characters={characters}
        wpm={wpm}
        timerStarted={timerStarted}
        timeRemaining={timeRemaining}
        startAgain={startAgain}
      />
    </div>
  )
}

export default ChallengeSection