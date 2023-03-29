import './App.css';
import Greet from './components/typescript-basic/Greet';
import Heading from './components/typescript-basic/Heading';
import Oscar from './components/typescript-basic/Oscar';
import Person from './components/typescript-basic/Person';
import PersonList from './components/typescript-basic/PersonList';
import Status from './components/typescript-basic/Status';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];

  return (
    <div className="App">
      <Greet name="moonho" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
    </div>
  );
}

export default App;
