// pages/index.js
import Navbar from '../components/Navbar'; // Import Navbar component
import SearchBar from '../components/SearchBar'; // Import SearchBar component
import Footer from '../components/Footer'; // Import Footer component
import { useState, useEffect } from 'react'; // Import useState and useEffect for managing local state and side effects
import { useMovieContext } from '../context/MovieContext'; // Import the custom hook to access MovieContext
import MovieCard from '../components/MovieCard'; // Import MovieCard component

// HomePage component to display the main search functionality and results
export default function HomePage() {
    const [searchResults, setSearchResults] = useState([]); // State to hold the search results
    const { addToFavorites, addToSearchHistory } = useMovieContext(); // Access functions from MovieContext

    // Function to fetch default movies
    const fetchDefaultMovies = async () => {
        try {
            const response = await fetch(`/api/movies?default=true`); // Fetch default movies from the API
            const data = await response.json(); // Parse the JSON response

            if (data.Search) {
                setSearchResults(data.Search); // Update state with search results
            } else {
                setSearchResults([]); // Clear results if no movies found
            }
        } catch (error) {
            console.error('Error fetching movies:', error); // Log any errors
        }
    };

    // Fetch default movies on component mount
    useEffect(() => {
        fetchDefaultMovies(); // Call the function to fetch default movies
    }, []); // Empty dependency array means this runs once on mount

    // Handle search query and fetch movie data
    const handleSearch = async (query) => {
        if (!query) return; // Return if the query is empty

        addToSearchHistory(query); // Add the search query to history

        try {
            const response = await fetch(`/api/movies?query=${encodeURIComponent(query)}`); // Fetch movies from the API
            const data = await response.json(); // Parse the JSON response

            if (data.Search) {
                setSearchResults(data.Search); // Update state with search results
            } else {
                setSearchResults([]); // Clear results if no movies found
            }
        } catch (error) {
            console.error('Error fetching movies:', error); // Log any errors
        }
    };

    return (
        <div className="container mx-auto p-4 mt-16"> {/* Added mt-16 for spacing below the navbar */}
            <Navbar />
            <h1 className="text-2xl font-bold mt-4 text-center">Welcome to the Movie App</h1> {/* Main title */}
            <p className="text-gray-400 mb-4 text-center">Search for movies and add to your favorites.</p> {/* Subtitle */}
            <SearchBar onSearch={handleSearch} /> {/* Search bar for user input */}

            {/* Placeholder for displaying search results */}
            <div className="mt-4 grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Responsive grid for movie cards */}
                {searchResults.length === 0 ? ( // Check if there are search results
                    <div className="flex justify-center items-center h-64 text-center"> {/* Flex container to center the message */}
                        <p className="text-gray-500 ">No movies found. Please search for a movie.</p> {/* Message if no results */}
                    </div>
                ) : (
                    searchResults.map((movie) => ( // Map over search results and render MovieCard for each
                        <MovieCard 
                            key={movie.imdbID} 
                            movie={movie} 
                            onFavoriteClick={() => addToFavorites(movie)} // Handle adding to favorites
                        />
                    ))
                )}
            </div>

            <Footer /> {/* footer at the end of the page */}
        </div>
    );
}
