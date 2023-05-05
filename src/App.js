import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className='flex justify-center h-screen items-center flex-col w-full'>
      <SignIn />
      <br />
      <SignUp />
    </div>
  );
}

export default App;
