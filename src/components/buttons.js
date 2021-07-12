import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css';

export default function ButtonPadOne() {
  const buttontsPadOne = {
    background: '#F87171',
  };
  return (
    <div className='container' id='display'>
      <div
        className='grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 
      '
      >
        <button
          id='african-hi'
          className='w-full h-full text-sm font-bold text-red-medium p-10 shadow-2xl rounded-lg drum-pad'
          type='button'
          style={buttontsPadOne}
        >
          Q
          <audio
            className='clip'
            src='https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/80[kb]african-pe-hi.wav.mp3'
            id='Q'
          ></audio>
        </button>
        <button
          id='african-lo'
          className='w-full h-full text-sm font-bold text-red-medium p-10 shadow-2xl rounded-lg drum-pad'
          type='button'
          style={buttontsPadOne}
        >
          W
          <audio
            className='clip'
            src='https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/90[kb]african-pe-lo.wav.mp3'
            id='W'
          ></audio>
        </button>
        <button
          id='africa-med'
          className='w-full h-full text-sm font-bold text-red-medium p-10 shadow-2xl rounded-lg drum-pad'
          type='button'
          style={buttontsPadOne}
        >
          E
          <audio
            className='clip'
            src='https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/91[kb]african-pe-med.wav.mp3'
            id='E'
          ></audio>
        </button>
        <button
          id='bendy'
          className='w-full h-full text-sm font-bold text-red-medium p-10 shadow-2xl rounded-lg drum-pad'
          type='button'
          style={buttontsPadOne}
        >
          A
          <audio
            className='clip'
            src='https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/171[kb]bendy.wav.mp3'
            id='A'
          ></audio>
        </button>
        <button
          id='bigbend'
          className='w-full h-full text-sm font-bold text-red-medium p-10 shadow-2xl rounded-lg drum-pad'
          type='button'
          style={buttontsPadOne}
        >
          S
          <audio
            className='clip'
            src='https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/114[kb]bigbend.wav.mp3'
            id='S'
          ></audio>
        </button>
        <button
          id='blobble'
          className='w-full h-full text-sm font-bold text-red-medium p-10 shadow-2xl rounded-lg drum-pad'
          type='button'
          style={buttontsPadOne}
        >
          D
          <audio
            className='clip'
            src='https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/36[kb]blobble.wav.mp3'
            id='D'
          ></audio>
        </button>
        <button
          id='bongo hi'
          className='w-full h-full text-sm font-bold text-red-medium p-10 shadow-2xl rounded-lg drum-pad'
          type='button'
          style={buttontsPadOne}
        >
          Z
          <audio
            className='clip'
            src='https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/12[kb]bongo%20hi.wav.mp3'
            id='Z'
          ></audio>
        </button>
        <button
          id='bongo lo'
          className='w-full h-full text-sm font-bold text-red-medium p-10 shadow-2xl rounded-lg drum-pad'
          type='button'
          style={buttontsPadOne}
        >
          X
          <audio
            className='clip'
            src='https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/27[kb]bongo%20lo.wav.mp3'
            id='X'
          ></audio>
        </button>
        <button
          id='crikix'
          className='w-full h-full text-sm font-bold text-red-medium p-10 shadow-2xl rounded-lg drum-pad'
          type='button'
          style={buttontsPadOne}
        >
          C
          <audio
            className='clip'
            src='https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/African%20and%20Eastern%20Percussion/69[kb]crikix.wav.mp3'
            id='C'
          ></audio>
        </button>
      </div>
    </div>
  );
}
ButtonPadOne.propTypes = {
  button: PropTypes.func,
};
