import './App.css';
import Button from './components/typescript-basic/Button';
import Input from './components/typescript-basic/Input';

function App() {
  return (
    <div className="App">
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
