import Link from 'next/link'; // Import Link from Next.js for client-side navigation
import React from 'react'; // Import React to create the component
import Image from 'next/image'; // Import Image to update img 


// MovieCard component to display individual movie information
const MovieCard = ({ movie, onFavoriteClick }) => {
    return (
        <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            {/* Link to the movie details page using the movie's unique ID */}
            <Link href={`/movie/${movie.imdbID}`}>
                <Image
                    src={movie.Poster !== "N/A" ? movie.Poster : '/placeholder.png'} // Display poster image or a placeholder
                    alt={`${movie.Title} Poster`} // Alt text for accessibility
                    width={300} height={450}
                    className="w-full h-60 object-cover" // Style for the image
                />
            </Link>
            <div className="p-4">
                <h2 className="text-lg font-semibold">{movie.Title}</h2>
                <p className="text-gray-400">{movie.Year}</p>
                <button 
                    onClick={() => onFavoriteClick(movie)} // Call function to add movie to favorites
                    className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add to Favorites
                </button>
            </div>
        </div>
    );
};

// Export the MovieCard component
export default MovieCard;
