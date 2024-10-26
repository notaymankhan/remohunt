import './App.css';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider , Slider } from '@mantine/core';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <MantineProvider>
      <HomePage/>
    </MantineProvider>
  );
}

export default App;
