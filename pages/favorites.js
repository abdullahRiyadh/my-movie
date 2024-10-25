import { useMovieContext } from '../context/MovieContext'; // Import the custom hook to access MovieContext
import Navbar from '../components/Navbar'; // Import Navbar component
import Footer from '../components/Footer'; // Import Footer component
import MovieCard from '../components/MovieCard'; // Import MovieCard component

// Favorites component to display the list of favorite movies
const Favorites = () => {
    const { favorites } = useMovieContext(); // Access the favorites list from the MovieContext

    return (
        <div className="container mx-auto p-4 mt-16"> {/* Added mt-16 to create space below the navbar */}
            <Navbar />
            <h1 className="text-2xl font-bold mt-6 text-center">Your Favorite Movies</h1> {/* Title for the favorites page */}
            <p className="text-gray-400 mb-4 text-center">These are the movies you&apos;ve added to favorites.</p> {/* Subtitle for the page */}

            {/* Displaying favorite movies */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Responsive grid for movie cards */}
                {favorites.length === 0 ? ( // Check if there are any favorite movies
                    <div className="flex justify-center items-center h-64"> {/* Center the message vertically */}
                        <p className="text-gray-500">No favorite movies found.</p> {/* Message if no favorites */}
                    </div>
                ) : (
                    favorites.map((movie) => ( // Map over the favorites array and render MovieCard for each
                        <MovieCard key={movie.imdbID} movie={movie} /> // Pass movie data to MovieCard
                    ))
                )}
            </div>
            <Footer />{/* footer at the end of the page */}
        </div>
    );
};

// Export the Favorites component
export default Favorites;
