import React, {useState} from 'react';
import './Metronome.css';
import click1 from './assets/click1.wav';
import click2 from './assets/click2.wav';

const Metronome = () => {
    const [play, setPlay] = useState(false);
    const [bpm, setBpm] = useState(100);

    let timer = null;
    const handlePlaying = () => {
        setPlay(!play);
        if (play === true) {
            clearInterval(timer);
            setPlay(false);
        } else if (play === false) {
            timer = setInterval(
                playClick, ((60 / bpm) * 1000)
            );
            setPlay(true);
            playClick();
        }
    };

    const playClick  = () => {

        c1.play();
    }

    const handleBpmChange = (e) => {
        let nuBpm = e.target.value;
        if (play) {
            clearInterval(timer);
            timer = setInterval(
                playClick, ((60 / bpm) * 1000)
            );
            setBpm(nuBpm);
        } else {
            setBpm(nuBpm);
        }
    };

    let c1 = new Audio(click1);
    let c2 = new Audio(click2);

    return (
        <div className='metronome'>
            <div className='bpmSlider'>
                <p>{bpm} BPM</p>
                <input type='range' min='60' max='240' value={bpm} onChange={handleBpmChange}/>
            </div>
            <button onClick={handlePlaying}>{play ? 'Stop': 'Start'}</button>
        </div>
    );
};

export default Metronome;