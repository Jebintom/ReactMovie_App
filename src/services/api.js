const API_KEY="000d3413cb6af9eaf41c857fc865969d";
const BASE_URL="https://api.themoviedb.org/3";
export const getPopularMovies=async()=>{
    const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data=await response.json();
    return data.results;
}
export const searchMovies=async(query)=>{
    const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query)}`);
    const data=await response.json();
    return data.results;
}