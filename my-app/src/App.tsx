import {Routes,Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import FavPage from './pages/FavPage';
import HomePage from './pages/HomePage';

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favpage' element={<FavPage />} />
      </Routes>
    </>
  );
}

export default App;
