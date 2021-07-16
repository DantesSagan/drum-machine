import React from 'react';

export default function Pad({ soundObj, volume }) {
  const [active, setActive] = React.useState(false);
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });
  const handleKeyPress = (e) => {
    if (e.keyCode === soundObj.keyCode) {
      soundPlay();
    }
  };
  const soundPlay = () => {
    const audioTag = document.getElementById(soundObj.keyid);
    setTimeout(() => setActive(false), 200);
    setActive(true);
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    audioTag.play();
  };

  return (
    <div className='text-center'>
      <div
        id={soundObj.id}
        type='button'
        className={` bg-red-400 w-full h-full text-sm font-bold  p-10 shadow-2xl rounded-lg button-active drum-pad ${
          active && 'bg-red-700'
        }`}
        onClick={soundPlay}
      >
        <audio
          className='clip'
          id={soundObj.keyid}
          src={soundObj.sound}
        ></audio>
        {soundObj.keyid}
      </div>
    </div>
  );
}
