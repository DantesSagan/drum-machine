import PropTypes from 'prop-types';

export default function ButtonPadOne() {
  const buttontsPadOne = {
    background: '#F87171',
  };
  return (
    <div className='flex justify-left p-4'>
      <div
        className='grid grid-flow-col grid-cols-3 grid-rows-3 gap-4
      '
      >
        <div className='shadow-2xl'>
          <div
            className='transform hover: rotate-0 transition duration-300 p-10'
            style={buttontsPadOne}
          >
            <button
              className='w-full h-full text-sm font-bold text-red-medium'
              type='button'
            >
              1
            </button>
          </div>
        </div>
        <div
          className='transform hover: rotate-0 transition duration-300 p-10'
          style={buttontsPadOne}
        >
          <button
            className='w-full h-full text-sm font-bold text-red-medium'
            type='button'
          >
            2
          </button>
        </div>
        <div
          className='transform hover: rotate-0 transition duration-300 p-10'
          style={buttontsPadOne}
        >
          <button
            className='w-full h-full text-sm font-bold text-red-medium'
            type='button'
          >
            3
          </button>
        </div>
        <div
          className='transform hover: rotate-0 transition duration-300 p-10'
          style={buttontsPadOne}
        >
          <button
            className='w-full h-full text-sm font-bold text-red-medium'
            type='button'
          >
            4
          </button>
        </div>
        <div
          className='transform hover: rotate-0 transition duration-300 p-10'
          style={buttontsPadOne}
        >
          <button
            className='w-full h-full text-sm font-bold text-red-medium'
            type='button'
          >
            5
          </button>
        </div>
        <div
          className='transform hover: rotate-0 transition duration-300 p-10'
          style={buttontsPadOne}
        >
          <button
            className='w-full h-full text-sm font-bold text-red-medium'
            type='button'
          >
            6
          </button>
        </div>
        <div
          className='transform hover: rotate-0 transition duration-300 p-10'
          style={buttontsPadOne}
        >
          <button
            className='w-full h-full text-sm font-bold text-red-medium'
            type='button'
          >
            7
          </button>
        </div>
        <div
          className='transform hover: rotate-0 transition duration-300 p-10'
          style={buttontsPadOne}
        >
          <button
            className='w-full h-full text-sm font-bold text-red-medium'
            type='button'
          >
            8
          </button>
        </div>
        <div
          className='transform hover: rotate-0 transition duration-300 p-10'
          style={buttontsPadOne}
        >
          <button
            className='w-full h-full text-sm font-bold text-red-medium'
            type='button'
          >
            9
          </button>
        </div>
      </div>
    </div>
  );
}
ButtonPadOne.propTypes = {
  button: PropTypes,
};
