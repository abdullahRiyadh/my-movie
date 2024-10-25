import { useEffect, useState } from 'react'; // Import hooks from React
import { useRouter } from 'next/router'; // Import useRouter for routing
import ErrorMessage from './ErrorMessage'; // Import the ErrorMessage component
import Spinner from './Spinner'; // Import the Spinner component

const MovieDetails = () => {
    const router = useRouter(); // Get the router object
    const { id } = router.query; // Get the movie ID from the query parameters
    const [movie, setMovie] = useState(null); // State to hold movie details
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State to hold error messages

    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (id) {
                setLoading(true); // Set loading to true while fetching data
                try {
                    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=YOUR_API_KEY`);
                    const data = await response.json();

                    if (data.Response === 'True') {
                        setMovie(data); // Set the movie details in state
                    } else {
                        setError(data.Error); // Set error message if no movie found
                    }
                } catch (err) {
                    setError('Failed to fetch movie details.'); // Handle any fetch errors
                } finally {
                    setLoading(false); // Set loading to false after fetching
                }
            }
        };

        fetchMovieDetails(); // Call the function to fetch movie details
    }, [id]); // Dependency array includes id, so it runs when id changes

    // Render loading spinner if data is still being fetched
    if (loading) {
        return <Spinner />;
    }

    // Render error message if there was an error fetching movie details
    if (error) {
        return <ErrorMessage message={error} />;
    }

    // Render movie details if available
    return (
        <div className="container mx-auto  p-4 ">
           
            <div className="mt-4 flex flex-col md:flex-row">
            <h1 className="text-3xl font-bold text-gray-100">{movie.Title}</h1>
                <img
                    src={movie.Poster !== "N/A" ? movie.Poster : '/placeholder.png'} // Display poster or placeholder
                    alt={`${movie.Title} Poster`} // Alt text for accessibility
                    className="w-full md:w-1/2 h-auto rounded-lg shadow-lg" // Style for the image
                />
                <div className="md:ml-4 mt-4 md:mt-0 text-gray-200">
                    <p><strong>Year:</strong> {movie.Year}</p>
                    <p><strong>Genre:</strong> {movie.Genre}</p>
                    <p><strong>Director:</strong> {movie.Director}</p>
                    <p><strong>Actors:</strong> {movie.Actors}</p>
                    <p><strong>Plot:</strong> {movie.Plot}</p>
                    <p><strong>Rating:</strong> {movie.imdbRating}</p>
                    
                </div>
            </div>
        </div>
    );
};

// Export the MovieDetails component
export default MovieDetails;
