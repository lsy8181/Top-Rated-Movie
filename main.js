const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNGE4NGQ5Mzc4YzNkYjI2MmQ1OTFjYmU2Y2Q1MWQ2NCIsInN1YiI6IjY2MmI1YjZkOTVjZTI0MDExZTYwZWFlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7sHGrtD5aOh8_K3kGLBC7NIMk6tF13L0iYDpSlI2oHE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));