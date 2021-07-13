import React from 'react';
import { Howl, Howler } from 'howler';
import 'tailwindcss/tailwind.css';

const collectionOne = [
  {
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/80[kb]african-pe-hi.wav.mp3',
    label: 'Q',
    id: 'african-hi ',
  },
  {
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/90[kb]african-pe-lo.wav.mp3',
    label: 'W',
    id: 'african-lo ',
  },
  {
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/91[kb]african-pe-med.wav.mp3',
    label: 'E',
    id: 'african-med',
  },
  {
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/171[kb]bendy.wav.mp3',
    label: 'A',
    id: 'bendy',
  },
  {
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/114[kb]bigbend.wav.mp3',
    label: 'S',
    id: 'bigbend',
  },
  {
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/36[kb]blobble.wav.mp3',
    label: 'D',
    id: 'blobble',
  },
  {
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/12[kb]bongo%20hi.wav.mp3',
    label: 'Z',
    id: 'bongo-hi',
  },
  {
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/27[kb]bongo%20lo.wav.mp3',
    label: 'X',
    id: 'bongo-lo',
  },
  {
    sound:
      'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/69[kb]crikix.wav.mp3',
    label: 'C',
    id: 'crikix ',
  },
];

class Buttons extends React.Component {
  SoundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };
  RenderSound = () => {
    return collectionOne.map((soundObj, index) => {
      return (
        <button
          className='w-full h-full text-sm font-bold text-red-medium p-10 shadow-2xl rounded-lg button-active'
          key={index}
          onClick={() => this.SoundPlay(soundObj.sound)}
        >
          {soundObj.label}
        </button>
      );
    });
  };
  render() {
    Howler.volume(1.0);
    return (
      <div className='container' id='display'>
        <div className='grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 drum-pad'>
          {this.RenderSound()}
          <audio
            className='clip'
            src='https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/80[kb]african-pe-hi.wav.mp3'
            id='Q'
          ></audio>
        </div>
      </div>
    );
  }
}

export default Buttons;
