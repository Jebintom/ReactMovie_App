import '../components/CSS/Favorites.css'
import MovieCard from '../components/MovieCard';
import { useMovieContext } from '../contexts/MovieContext';
function Favorites(){
    const {favorites}=useMovieContext()
    if(favorites){
        return (
        <div className='favorites'> 
            <h2>Favorited</h2>
        <div className="movies-grid">
        {favorites.map((movie)=>(
            <MovieCard movie={movie} key={movie.id} />
        ))}
          
           
          </div>
        </div>
    )}
    return (
        <div className="favorites-empty">
            <h2>no favorite movies</h2>
            <p>Start adding movies to your favorites and they will appear</p>

        </div>
    )
}
export default Favorites;