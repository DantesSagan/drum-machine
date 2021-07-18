import React from 'react';
import ToggleButton from './components/toggleButton';
import Pad from '../src/actions/pad';
import 'tailwindcss/tailwind.css';

const collectionOne = [
  {
    keyCode: 81,
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/80[kb]african-pe-hi.wav.mp3',
    keyid: 'Q',
    id: 'african-pe-hi',
  },
  {
    keyCode: 87,
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/90[kb]african-pe-lo.wav.mp3',
    keyid: 'W',
    id: 'african-pe-lo',
  },
  {
    keyCode: 69,
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/91[kb]african-pe-med.wav.mp3',
    keyid: 'E',
    id: 'african-pe-med',
  },
  {
    keyCode: 65,
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/171[kb]bendy.wav.mp3',
    keyid: 'A',
    id: 'bendy',
  },
  {
    keyCode: 83,
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/114[kb]bigbend.wav.mp3',
    keyid: 'S',
    id: 'bigbend',
  },
  {
    keyCode: 68,
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/36[kb]blobble.wav.mp3',
    keyid: 'D',
    id: 'blobble',
  },
  {
    keyCode: 90,
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/12[kb]bongo%20hi.wav.mp3',
    keyid: 'Z',
    id: 'bongo-hi',
  },
  {
    keyCode: 88,
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/27[kb]bongo%20lo.wav.mp3',
    keyid: 'X',
    id: 'bongo-lo',
  },
  {
    keyCode: 67,
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/69[kb]crikix.wav.mp3',
    keyid: 'C',
    id: 'crikix',
  },
];

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function App() {
  const [volume, setVolume] = React.useState(0.3);

  const [recording, setRecording] = React.useState(' ');

  const [speed, setSpeed] = React.useState(0.5);

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
    <div
      id='drum-machine'
      className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-60 d-flex p-4 grid grid-flow-col grid-cols-2 gap-4  '
      style={{ background: '#FECACA' }}
    >
      <div className='grid grid-flow-col grid-cols-3 grid-rows-3 gap-4'>
        {collectionOne.map((soundObj) => (
          <Pad
            key={soundObj.id}
            soundObj={soundObj}
            volume={volume}
            setRecording={setRecording}
          />
        ))}
      </div>
      <div className='container-right'>
        <div className='flex justify-center pl-0 pr-5 mt-10'>
          <p className='font-bold text-red-medium'>Power</p>
        </div>
        <div className='flex justify-center pl-0 pr-5'>
          <ToggleButton />
        </div>
        <hr />
        <div
          id='display'
          className='switch-button justify-center pl-0 pr-5 mt-5'
          style={{
            backgroundColor: '#fffdd0',
            width: '250px',
            height: '40px',
            margin: '15px auto',
            padding: '15px',
          }}
        >
          <p className='text-center text-lg underline font-bold pl-0 pr-5 '>
            {recording}
          </p>
          {recording && (
            <>
              <button onClick={playRecording} className='bg-green-400'>
                Play
              </button>
              <button onClick={() => setRecording(' ')} className='bg-red-400'>
                Clear
              </button>
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
        <hr />
        <h4 className='flex justify-center pl-0 pr-5 font-bold'>Volume</h4>
        <div className='flex justify-center pl-0 pr-5 mt-2'>
          <input
            type='range'
            step='0.01'
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            max='1'
            min='0'
            className='text-center w-50 '
          />
        </div>
        <div className='text-center'></div>
        <div className='flex justify-center pl-0 pr-5 mt-5'>
          <p className='font-bold text-red-medium'>Switch</p>
        </div>
        <div className='flex justify-center pl-0 pr-5 '>
          <ToggleButton />
        </div>
        <hr />
      </div>
    </div>
  );
}
console.log(Pad);
