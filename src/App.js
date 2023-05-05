import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

function App() {
  return (
    <div className='App'>
      <h1>Hello Firestore!</h1>
      <SignIn />
      <br />
      <SignUp />
    </div>
  );
}

export default App;
