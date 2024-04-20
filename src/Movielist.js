import React, { useState } from "react";
import Rating from './Rating';
import './tailwind.css';

function Movielist({ movieList }) {

    const [sortedMovies, setSortedMovies] = useState(movieList);

    const sortMoviesByRating = () => {
        const sorted = [...sortedMovies].sort((a, b) => b.rating - a.rating);
        setSortedMovies(sorted);
    };

    const sortMoviesByYear = (movieList) => {
        const sorted = [...sortedMovies].sort((a, b) => b.year - a.year);
        setSortedMovies(sorted);
    }

    return (
        <div className="movie__list">
            <div className="movie__list-sort flex justify-center items-center">
                <button className="bg-lightpurple text-white font-bold py-2 px-4 rounded m-2 focus:outline-none focus:shadow-outline transform hover:scale-110 transition duration-300 ease-in-out" onClick={sortMoviesByRating}>
                    Sort by rating
                </button>
                <button className="bg-lightpurple text-white font-bold py-2 px-4 rounded m-2 focus:outline-none focus:shadow-outline transform hover:scale-110 transition duration-300 ease-in-out" onClick={sortMoviesByYear}>
                    Sort by year
                </button>
            </div>
            {sortedMovies.map((movie, index) => (
                <div key={index} className="block m-10">
                    <h3 className="text-3xl font-bold text-lightpurple">{movie.name}</h3>
                    <p>{movie.year}</p>
                    <Rating rating={movie.rating} />
                </div>
            ))}
        </div>
    );
}

export default Movielist;