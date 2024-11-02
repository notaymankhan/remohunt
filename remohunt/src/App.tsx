import './App.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { createTheme, MantineProvider , Slider } from '@mantine/core';
import HomePage from './Pages/HomePage';
import FindJobsPage from './Pages/FindJobsPage';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  const theme = createTheme({
    colors: {
      'mine-shaft': ['#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888', '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#2d2d2d'],
      'bright-sun': ['#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20', '#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d', '#461902'],
    },
    fontFamily: 'Poppins, sans-serif',
  });
  return (
    <MantineProvider defaultColorScheme='dark' theme={theme}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path ='/find-talent' element={<FindTalentPage/>}></Route>
        <Route path ='/find-jobs' element={<FindJobsPage/>}></Route>
        <Route path ='/talent-profle' element={<TalentProfilePage/>}></Route>
        <Route path ='*' element={<HomePage/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App;
