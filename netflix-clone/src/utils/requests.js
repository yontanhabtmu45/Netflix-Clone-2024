const API_KEY = process.env.REACR_APP_API_KEY;
const requests = {
    fetchTrending: '/trending/all/week?api_key=${API_KEY}&language=en-US',
    fetchNetflixOriginals: '/discover/tv?api_key=${API_KEY}&with_networks=213',
    fetchtopRatedMovies: '/movie/top_rated?api_key=${API_KEY}&language=en-US',
    fetchActionMovies: '/discover/movie?api_key=${API_KEY}&with_geners=28',
    fetchComedyMovies: '/discover/movie?api_key=${API_KEY}&with_geners=35',
    fetchHorrorMovies: '/discover/movie?api_key=${API_KEY}&with_geners=27',
    fetchRomanceMovies: '/discover/movie?api_key=${API_KEY}&with_geners=10749',
    fetchDocumentaries: '/discover/movie?api_key=${API_KEY}&with_geners=99',
    fetchTvShow: '/tv/popular?api_key=${API_KEY}&language=en-US&page=1'
}