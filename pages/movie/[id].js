import { useEffect, useState } from 'react'; // Import hooks for managing state and side effects
import { useRouter } from 'next/router'; // Import useRouter to access route parameters
import Navbar from '../../components/Navbar'; // Import Navbar component
import Footer from '../../components/Footer'; // Import Footer component
import Spinner from '../../components/Spinner'; // Import Spinner component
import ErrorMessage from '../../components/ErrorMessage'; // Import ErrorMessage component
import { useMovieContext } from '../../context/MovieContext'; // Import the custom hook to access MovieContext
import Image from 'next/image';

// MovieDetails component to display movie information
const MovieDetails = () => {
    const router = useRouter(); // Initialize the router
    const { id } = router.query; // Extract the movie ID from the route parameters
    const { addToFavorites } = useMovieContext(); // Access addToFavorites function from context
    const [movie, setMovie] = useState(null); // State to hold movie details
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to hold any errors

    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (!id) return; // Return if ID is not available

            const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY; // Get the OMDb API key from environment variables
            const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`); // Fetch movie details from OMDb API
            const data = await response.json(); // Parse the JSON response

            if (data.Response === 'True') {
                setMovie(data); // Set the movie data
            } else {
                setError(data.Error); // Set error message if movie not found
            }
            setLoading(false); // Set loading to false after fetching data
        };

        fetchMovieDetails(); // Call the function to fetch movie details
    }, [id]); // Dependency array to rerun the effect when `id` changes

    // Render loading spinner while fetching data
    if (loading) {
        return <Spinner />;
    }

    // Render error message if there was an error fetching data
    if (error) {
        return <ErrorMessage message={error} />;
    }

    // Render movie details once data is fetched
    return (
        <div className="container mx-auto p-4">
            <Navbar />
            <div className="mt-12">
                <h2 className="text-3xl font-bold mb-4">{movie.Title}</h2> {/* Movie title */}
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <Image src={movie.Poster} alt={movie.Title}width={300} height={450} className="w-full md:w-1/3 h-auto" /> {/* Movie poster */}
                    <div className="mt-4 md:mt-0">
                        <p><strong>Year:</strong> {movie.Year}</p> {/* Movie year */}
                        <p><strong>Director:</strong> {movie.Director}</p> {/* Movie director */}
                        <p><strong>Genre:</strong> {movie.Genre}</p> {/* Movie genre */}
                        <p><strong>Plot:</strong> {movie.Plot}</p> {/* Movie plot */}
                        <button
                            onClick={() => addToFavorites(movie)} // Add to favorites when button is clicked
                            className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
                        >
                            Add to Favorites
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

// Export the MovieDetails component
export default MovieDetails;
