import { div } from 'prelude-ls'
import React from 'react'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import TryAgain from '../TryAgain/TryAgain';
import './TestContainer.css'
const TestContainer = ({
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
        <div className='test-container'>
            {timeRemaining > 0 ? (
                <div data-aos="fade-up" className='typing-challenge-cont'>
                    <TypingChallengeContainer selectedParagraph={selectedParagraph}
                        testInfo={testInfo}
                        onInputChange={onInputChange}
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        timerStarted={timerStarted}
                        timeRemaining={timeRemaining}
                    />
                </div>
            ) :
                (
                    <div className='try-again-cont'>
                        <TryAgain
                            words={words}
                            characters={characters}
                            wpm={wpm}
                            startAgain={startAgain}
                        />
                    </div>
                )}
        </div>
    )
}

export default TestContainer