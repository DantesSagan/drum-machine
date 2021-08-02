import React, { useEffect } from 'react';

export default function Pad({ soundObj, volume, setRecording }) {
  const [active, setActive] = React.useState(false);
  useEffect(() => {
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
    setActive(true);
    setTimeout(() => setActive(false), 200);
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    audioTag.play();
    setRecording((prev) => prev + soundObj.keyid + ' ');
  };

  return (
    <div className='text-center'>
      <div
        id={soundObj.id}
        type='button'
        className={` bg-red-400 w-full h-full text-sm font-bold  p-10  rounded-lg button-active drum-pad ${
          active && 'bg-red-700 shadow-2xl'
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
