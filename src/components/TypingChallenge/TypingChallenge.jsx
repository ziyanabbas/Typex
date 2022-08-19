import React from 'react'
import TestLetter from '../TestLetter/TestLetter'
import "./TypingChallenge.css"
const TypingChallenge = ({
    timeRemaining,
    testInfo,
    onInputChange,
    timerStarted
}) => {
    return (
        <div className='typing-challenge'>
            <div className='timer-container'>
                <p className='timer'>
                    00: {timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
                </p>
                <p className='timer-info'>
                    {!timerStarted && "Start typing to start the testing "}
                </p>
            </div>
            <div className='textarea-container'>
                <div className='textarea-left'>
                <div className='textarea test-paragraph'>
                    {testInfo.map((individualLetterInfo, index) =>
                        <TestLetter
                            key={index}
                            individualLetterInfo={individualLetterInfo}
                        />)}
                </div>
                </div>
                <div className='textarea-right'>
                    <textarea
                        onChange={(e) => onInputChange(e.target.value)}
                        className="textarea"
                        placeholder='start'
                    ></textarea>
                </div>
            </div>
        </div>
    )
}

export default TypingChallenge