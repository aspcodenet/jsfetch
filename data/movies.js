export async function loadMovies() {
    const response = await fetch('https://gist.githubusercontent.com/aspcodenet/74bda8ae5186b7e22639a1fa60b333ba/raw/da78f59ea9ae76784b6849368a59e8599af9bfe6/movies.json?id=123');
    const movies = await response.json();
  
    return movies
  }