import './App.css';
import Button from './components/typescript-basic/html/Button';
import RandomNumber from './components/typescript-basic/restriction/RandomNumber';
import Toast from './components/typescript-basic/templateliterals/Toast';

function App() {
  return (
    <div className="App">
      <Button variant="primary" onClick={() => console.log('Clicked')}>
        Primary Button
      </Button>
    </div>
  );
}

export default App;
