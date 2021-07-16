/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React from 'react';
import Pad from '../actions/pad';
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
export default function Buttons() {
  const [volume, setVolume] = React.useState(0.3);
  return (
    <div className='grid grid-flow-col grid-cols-3 grid-rows-3 gap-4'>
      {collectionOne.map((soundObj) => (
        <Pad key={soundObj.id} soundObj={soundObj} volume={volume} />
      ))}
      <h4>Volume</h4>
      <input
        type='range'
        step='0.01'
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        max='1'
        min='0'
        className='w-50'
      />
    </div>
  );
}
