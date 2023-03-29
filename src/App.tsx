import './App.css';
import Box from './components/typescript-basic/context/Box';
import ThemeContextProvider from './components/typescript-basic/context/ThemeContext';
import User from './components/typescript-basic/context/User';
import UserContextProvider from './components/typescript-basic/context/UserContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
