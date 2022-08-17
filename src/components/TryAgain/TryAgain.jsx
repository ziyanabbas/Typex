import React from 'react';
import './TryAgain.css';
const TryAgain = () => {
    const url = "ziyanabbas.com"
  return (
    <div data-aos="fade-up" className='try-again-container'>
        <h1>Test Results</h1>
        <div className='result-container'>
            <p>
                <b>Characters:</b>
            </p>
            <p>
                <b>Words:</b>
            </p>
            <p>
                <b>Speed:</b>
            </p>
        </div>
        <div>
            <button
            // onClick={()=> startAgain()}
            className='end-buttons start-again-btn'
            > Retry</button>
            <button
            onClick={()=>window.open(
                "https://www.facebook.com/sharer/sharer.php?u=" +
                                url,
                "facebook-share-dialog",
                "width=800,height=600"
            )}
            >Share</button>
            <button 
            onClick={()=>window.open(
                "https://twitter.com/intent/tweet?text=Check%20this%20out%20" +
                    url,
                "Twitter",
                "width=800,height=600"
            )}>Tweet</button>
        </div>
    </div>
  )
}

export default TryAgain