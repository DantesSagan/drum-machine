/* eslint-disable no-unused-vars */
import React from 'react';
import ToggleButton from './components/toggleButton';
import Pad from '../src/actions/pad';
import 'tailwindcss/tailwind.css';
import { SwtichClick } from './actions/switchClick';
import { collectionOne } from './sounds/collectionOne';
import { collectionTwo } from './sounds/collectionTwo';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function App() {
  const [active] = React.useState(false);

  const [volume, setVolume] = React.useState(0.5);

  const [recording, setRecording] = React.useState('');

  const [speed, setSpeed] = React.useState(0.5);

  const [power, setPower] = React.useState(true);

  const [powerKeys, setPowerKeys] = React.useState(true);

  const playRecording = () => {
    let index = 0;
    let recordArray = recording.split(' ');

    const interval = setInterval(() => {
      const audioTag = document.getElementById(recordArray[index]);
      audioTag.volume = volume;
      audioTag.currentTime = 0;
      audioTag.play();
      index++;
    }, speed * 600);
    setTimeout(
      () => clearInterval(interval),
      600 * speed * recordArray.length - 1
    );
  };

  return (
    // MAIN DRUM-MACHINE
    <div
      id='drum-machine'
      className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden d-flex p-4 grid grid-flow-col grid-cols-1 gap-4 mt-4 '
      style={{ background: '#FECACA' }}
    >
      {/* RECORDING */}
      <div className='md:max-w-2xl'>
        {' '}
        <h1 className='text-4xl font-bold text-center mt-2 mb-2'>
          Drum Machine
        </h1>
        <hr />
        <div
          id='display'
          className='switch-button justify-center pl-0 pr-5 overflow-hidden'
          style={{
            backgroundColor: '#fffdd0',
            width: '250px',
            height: '40px',
            margin: '15px auto',
            padding: '15px',
          }}
        >
          <p className='text-center text-lg underline font-bold pl-0 pr-5'>
            {recording}
          </p>
        </div>
        <div className='text-center text-lg font-bold pl-0 pr-5 mt-2 mb-2 justify-center overflow-hidden'>
          {recording || (
            <>
              <button
                onClick={playRecording}
                className='button-switchRC bg-green-300'
              >
                <p className='text-white font-bold'>Play</p>
              </button>
              <button
                onClick={() => setRecording('')}
                className='button-switchRC bg-red-300'
              >
                <p className='text-white font-bold'>Clear</p>
              </button>
              <p>Speed</p>
              <input
                type='range'
                step='0.01'
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                max='1.4'
                min='0.1'
                className='text-center w-50 '
              />
            </>
          )}
        </div>
        {/* VOLUME */}
        {
          <SwtichClick
            power={power}
            setPower={setPower}
            powerKeys={powerKeys}
            setPowerKeys={setPowerKeys}
            active={active}
            collectionOne={collectionOne}
            collectionTwo={collectionTwo}
            Pad={Pad}
            volume={volume}
            setRecording={setRecording}
            recording={recording}
            playRecording={playRecording}
            speed={speed}
            setSpeed={setSpeed}
            setVolume={setVolume}
          />
        }
      </div>
    </div>
  );
}
