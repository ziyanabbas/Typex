import { div } from 'prelude-ls'
import React from 'react'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import TryAgain from '../TryAgain/TryAgain';
const TestContainer = () => {
  return (
    <div className='test-container'>
        {/* {timeRemaining > 0 ? ( */}
            <div data-aos="fade-up" className='typing-challenge-cont'>
                <TypingChallengeContainer />
            </div>
        {/* )
        :( */}
            <div className='try-again-cont'>
                <TryAgain />
            </div>
        {/* )} */}
    </div>
  )
}

export default TestContainer