"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('how many films?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('how many films?', '');
    }

}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt('Film you have watched?', ''),
            b = prompt('Your grade?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


console.log(personalMovieDB);