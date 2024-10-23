export const transformGenresIds = (genres, movieGenreIds) => {
  const transformedGenres = movieGenreIds.map(genreId => {
    const genre = genres.find(genre => {
      if (genreId === genre?.id) return genre;
    });

    return genre?.name;
  });

  return transformedGenres;
};
