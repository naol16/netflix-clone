const API_KEY=import.meta.env.MOVIE_APP_API_KEY
const request={
    fetchTrending:'trending/all/week/?api_key=${API_KEY} &language=en-US',
    fetchNetflixorginals:'discover/tv?api_key=${API_KEY}&with_networks=213',
    fetchedToprated:'/movie/top_rated?api_key=${API_KEY} &language=en-US',
    fetchComedy:'/discover/movie?api_key=${API_KEY}&with_genres=35',
    fetchHorrors:'/discover/movie?api_key=${API_KEY}&with_genres=27',
    fetchRomance:'/discover/movie?api_key=${API_KEY}&with_genres=10749',
    fetchDocumentary:'/discover/movie?api_key={API_KEY}&with_genres=99',
    fetchtvshow:'tv/popular/?api_key=${API_KEY} &language=en-US&page=1',
};
export default request