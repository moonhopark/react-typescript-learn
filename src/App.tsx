import './App.css';
import Private from './components/typescript-basic/auth/Private';
import Profile from './components/typescript-basic/auth/Profile';
import DomRef from './components/typescript-basic/ref/DomRef';
import MutableRef from './components/typescript-basic/ref/MutableRef';

function App() {
  return (
    <div className="App">
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
