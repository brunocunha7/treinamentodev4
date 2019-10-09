const API_URL = "https://www.omdbapi.com/?apikey=65de99a7";
let movies = [];

const getMovie = async e => {
  if (e.key === "Enter") {
    try {
      const movies = await getMovieFromIMDB(e.target.value);
      fillMovieInfo(movies);
    } catch (error) {
      $('#not-found')[0].innerHTML = 'Nenhum resultado foi encontrado =('
    }
  }
};

const getMovieFromIMDB = movieName => {
  return fetch(`${API_URL}&s=${movieName}&type=movie`).then(res => {
    return res.json();
  });
};

const fillMovieInfo = movies => {
  const movieList = $("#movie-list")[0];
  $('#not-found')[0].innerHTML = '';
  movieList.innerHTML = "";
  console.log(movies.Search);
  movies.Search.forEach(movie => {
    if(movie.Poster === 'N/A'){
      return
    }
    let movieElement = `
      <li>
        <img
          src="${movie.Poster}"
          alt="${movie.Title}"
        />
        <div class="content">
          <h6 id="title">Título - ${movie.Title}</h6>
          <h6 id="year">Ano - ${movie.Year}</h6>
        </div>
      </li>
    `;
    movieList.innerHTML +=  movieElement;
  });
};
