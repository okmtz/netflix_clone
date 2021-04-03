const API_KEY = "f07a83d4db927b33324903a02b4111d2";

export const requests = {
    fetchTrending: `/trending/all/week?api_key${API_KEY}&language=en-us`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/discover/tv?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    fetchComedyMovies: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentMovies: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};