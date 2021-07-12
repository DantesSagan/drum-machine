import ButtonPadOne from './components/buttons';
import 'tailwindcss/tailwind.css';
import Actions from './actions/actions';

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function App() {
  return (
    <div
      id='drum-machine'
      className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-60 d-flex p-4 grid grid-flow-col grid-cols-2 gap-4  '
      style={{ background: '#FECACA' }}
    >
      <ButtonPadOne />
      <Actions />
    </div>
  );
}
