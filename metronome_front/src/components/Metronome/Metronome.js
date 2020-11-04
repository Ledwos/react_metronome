import React, {useState} from 'react';

const Metronome = () => {
    const [play, setPlay] = useState(false);
    let bpm = 100;

    const handlePlaying = () => {
        setPlay(!play);
    }

    return (
        <div className='metronome'>
            <div className='bpmSlider'>
                <p>{bpm} BPM</p>
                <input type='range' min='60' max='240' value={bpm} />
            </div>
            <button onClick={handlePlaying}>{play ? 'Stop': 'Start'}</button>
        </div>
    );
};

export default Metronome;