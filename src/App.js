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

const collectionTwo = [
  {
    keyCode: 81,
    keyid: 'Q',
    id: 'Chord-1',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  },
  {
    keyCode: 87,
    keyid: 'W',
    id: 'Chord-2',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  },
  {
    keyCode: 69,
    keyid: 'E',
    id: 'Chord-3',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  },
  {
    keyCode: 65,
    keyid: 'A',
    id: 'Shaker',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  },
  {
    keyCode: 83,
    keyid: 'S',
    id: 'Open-HH',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  },
  {
    keyCode: 68,
    keyid: 'D',
    id: 'Closed-HH',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  },
  {
    keyCode: 90,
    keyid: 'Z',
    id: 'Punchy-Kick',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  },
  {
    keyCode: 88,
    keyid: 'X',
    id: 'Side-Stick',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  },
  {
    keyCode: 67,
    keyid: 'C',
    id: 'Snare',
    sound: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  },
];

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function App() {
  const [active] = React.useState(false);

  const [volume, setVolume] = React.useState(0.3);

  const [recording, setRecording] = React.useState(' ');

  const [speed, setSpeed] = React.useState(0.5);

  const [power, setPower] = React.useState(true);

  const [on, setOn] = React.useState(true);

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

  const swtichClick = () => {
    if (power) {
      return (
        <div>
          {/* POWER */}
          <div className='flex justify-center pl-0 pr-5 mt-5'>
            <p className='text-center text-black text-2xl font-bold'>Switch</p>
          </div>
          <p className='text-center font-bold text-xs pr-5 mt-1'>Turn to On</p>
          <div
            className='switch-button flex justify-center pl-0 pr-80'
            style={{
              backgroundColor: '#fffdd0',
              border: '1px solid black',
              borderRadius: '30px',
              width: '50',
              height: '42px',
              margin: '15px auto',
            }}
          >
            <div // turn OFF
              className='button-switch bg-red-600'
              style={{ float: 'left' }}
            >
              <p className='text-center text-white font-bold '>OFF</p>
            </div>
          </div>
          <div className='md:max-w-2xl'>
            <div className='flex justify-center pl-0 pr-5 mt-5'>
              <p className='font-bold text-2xl'>Power</p>
            </div>
            <div
              className='switch-button flex pl-0 pr-80'
              style={{
                backgroundColor: '#fffdd0',
                border: '1px solid black',
                borderRadius: '30px',
                width: '50',
                height: '42px',
                margin: '15px auto',
              }}
            >
              <div // turn OFF
                className={`button-switch bg-red-600 ${
                  active && 'bg-red-800 '
                }`}
                style={{ float: 'right' }}
                onClick={() => setPower(!power)}
              >
                <p className='text-center text-white font-bold '>OFF</p>
              </div>
            </div>
          </div>

          {/* SOUND */}
          <div className='grid grid-cols-3 grid-rows-3 gap-4'>
            {collectionOne.map((s) => (
              <div className='text-center'>
                <div
                  id={s.id}
                  type='button'
                  className={` bg-red-300 w-full h-full text-sm font-bold  p-10  button-active drum-pad`}
                >
                  <audio className='clip'></audio>
                  {s.keyid}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (on) {
      return (
        <div>
          {/* POWER */}
          <div className='flex justify-center pl-0 pr-5 mt-5'>
            <p className='text-center text-black text-2xl font-bold'>Switch</p>
          </div>
          <p className='text-center font-bold text-xs pr-5 mt-1'>
            African Bongo
          </p>
          <div
            className='switch-button flex justify-center pl-0 pr-80'
            style={{
              backgroundColor: '#fffdd0',
              border: '1px solid black',
              borderRadius: '30px',
              width: '50',
              height: '42px',
              margin: '15px auto',
            }}
          >
            <div // turn OFF
              className='button-switch bg-red-600'
              style={{ float: 'left' }}
              onClick={() => setOn(!on)}
            >
              <p className='text-center text-white font-bold '>OFF</p>
            </div>
          </div>
          <div className='md:max-w-2xl'>
            <div className='flex justify-center pl-0 pr-5 mt-5'>
              <p className='font-bold text-2xl'>Power</p>
            </div>
            <div
              className='switch-button flex justify-center pl-80 pr-0'
              style={{
                backgroundColor: '#fffdd0',
                border: '1px solid black',
                borderRadius: '30px',
                width: '50',
                height: '42px',
                margin: '15px auto',
              }}
            >
              <div // turn ON
                className='button-switch bg-green-700'
                style={{ float: 'right' }}
                onClick={() => setPower(!power)}
              >
                <p className='text-center text-white font-bold '>ON</p>
              </div>
            </div>
          </div>
          <hr />

          {/* SOUND */}
          <div className='grid grid-flow-col grid-cols-3 grid-rows-3 gap-4'>
            {collectionOne.map((soundObj) => (
              <Pad
                power={power}
                key={soundObj.id}
                soundObj={soundObj}
                volume={volume}
                setRecording={setRecording}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {/* POWER */}
          <div className='flex justify-center pl-0 pr-5 mt-5'>
            <p className='text-center text-black text-2xl font-bold'>Switch</p>
          </div>
          <p className='text-center font-bold text-xs pr-5 mt-1'>
            Piano && Drum
          </p>
          <div
            className='switch-button flex justify-center pl-80 pr-0'
            style={{
              backgroundColor: '#fffdd0',
              border: '1px solid black',
              borderRadius: '30px',
              width: '50',
              height: '42px',
              margin: '15px auto',
            }}
          >
            <div // turn ON
              className='button-switch bg-green-700'
              style={{ float: 'right' }}
              onClick={() => setOn(!on)}
            >
              <p className='text-center text-white font-bold '>ON</p>
            </div>
          </div>
          <div className='md:max-w-2xl'>
            <div className='flex justify-center pl-0 pr-5 mt-5'>
              <p className='font-bold text-2xl'>Power</p>
            </div>
            <div
              className='switch-button flex justify-center pl-80 pr-0'
              style={{
                backgroundColor: '#fffdd0',
                border: '1px solid black',
                borderRadius: '30px',
                width: '50',
                height: '42px',
                margin: '15px auto',
              }}
            >
              <div // turn ON
                className='button-switch bg-green-700'
                style={{ float: 'right' }}
                onClick={() => setPower(!power)}
              >
                <p className='text-center text-white font-bold '>ON</p>
              </div>
            </div>
          </div>
          <hr />

          {/* SOUND */}
          <div className='grid grid-flow-col grid-cols-3 grid-rows-3 gap-4'>
            {collectionTwo.map((sndObj) => (
              <Pad
                power={power}
                key={sndObj.id}
                soundObj={sndObj}
                volume={volume}
                setRecording={setRecording}
              />
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    // MAIN DRUM-MACHINE
    <div
      id='drum-machine'
      className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden d-flex p-4 grid grid-flow-col grid-cols-1 gap-4 mt-16 '
      style={{ background: '#FECACA' }}
    >
      {/* RECORDING */}
      <div className='md:max-w-2xl'>
        {' '}
        <h1 className='text-4xl font-bold text-center mt-5 mb-5'>
          Drum Machine
        </h1>
        <hr />
        <div
          id='display'
          className='switch-button justify-center pl-0 pr-5'
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
        <p className='text-center font-bold text-xs'>In progress #1</p>
        {/* VOLUME */}
        <h4 className='flex justify-center pl-0 pr-5 font-bold text-2xl'>
          Volume
        </h4>
        <div className='flex justify-center pl-0 pr-5 mt-2'>
          <input
            type='range'
            step='0.01'
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            max='1'
            min='0'
            className='text-center w-50 bg-black'
          />
          <p className='font-bold'> {volume}</p>
        </div>
        <hr />
        {swtichClick()}
      </div>
    </div>
  );
}
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

console.log(confirmEnding('Bastian', 'n'));