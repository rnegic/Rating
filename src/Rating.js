import React from "react";
function Rating({ rating }) {
    return (
        <div className="movie__rating">
            <ul className="movie__rating_list flex gap-2 justify-center">
                {[...Array(parseInt(rating))].map((_, starIndex) => (
                    <li key={starIndex}>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/001/189/165/small/star.png" className="w-7" alt="Star" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Rating;