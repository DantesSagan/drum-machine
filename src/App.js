import ButtonPadOne from './components/buttons';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function App() {
  const styleDiv = {
    background: '#FECACA',
  };
  return (
    <div
      className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-60'
      style={styleDiv}
    >
      <ButtonPadOne></ButtonPadOne>
    </div>
  );
}
