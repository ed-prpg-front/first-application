const numberOfFilms = prompt ('Сколько фильмо  в уже посмотрели?');

 const personalMovieDB = {
count:numberOfFilms,
movies:{},
actors:{},
genres: [],
privat:false,
 };
 const watchedFilms = prompt ('Один из последних просмотренных фильмов?');
 const objectMark  = prompt ('На сколько оцените его?');
 const newWatched = prompt ('Один из последних просмотренных фильмов?');
 const newMark = prompt ('На сколько оцените его?');

personalMovieDB.movies[watchedFilms] =  objectMark;
personalMovieDB.movies [newWatched] = newMark;

console.log(personalMovieDB);
