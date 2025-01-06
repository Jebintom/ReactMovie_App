import Home from './pages/Home';
import './components/CSS/App.css';
import Favorites from './pages/Favorites';
import {Routes,Route} from "react-router-dom"
import MovieCard  from './components/MovieCard';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
function App() { //component start with caps
 

  return (
    <MovieProvider>
    <NavBar />
    <main className='main-content'>
    <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/favorites" element={<Favorites/>}/>

    </Routes>
    </main>
    </MovieProvider> 
  );
}

export default App;
