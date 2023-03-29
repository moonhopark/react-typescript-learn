import './App.css';
import Button from './components/typescript-basic/Button';
import Container from './components/typescript-basic/Container';
import Input from './components/typescript-basic/Input';
import User from './components/typescript-basic/state/User';

function App() {
  return (
    <div className="App">
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <User />
    </div>
  );
}

export default App;
