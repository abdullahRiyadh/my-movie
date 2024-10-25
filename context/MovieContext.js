import { createContext, useContext, useState } from 'react';

// Create a context
const MovieContext = createContext();

// Custom hook to use the MovieContext
export const useMovieContext = () => {
    return useContext(MovieContext);
};

// Provider component
export const MovieProvider = ({ children }) => {
    const [searchHistory, setSearchHistory] = useState([]); // State to store search history
    const [favorites, setFavorites] = useState([]); // State to store favorite movies

    // Function to add a movie to favorites
    const addToFavorites = (movie) => {
        setFavorites((prevFavorites) => {
            // Check if movie is already in favorites
            if (!prevFavorites.find((fav) => fav.imdbID === movie.imdbID)) {
                return [...prevFavorites, movie]; // Add to favorites if not already present
            }
            return prevFavorites; // Return previous state if already present
        });
    };

    // Function to add a search query to history
    const addToSearchHistory = (query) => {
        setSearchHistory((prevHistory) => {
            // Check if query already exists in history
            if (!prevHistory.includes(query)) {
                return [...prevHistory, query]; // Add query if not already present
            }
            return prevHistory; // Return previous state if already present
        });
    };

    return (
        <MovieContext.Provider value={{ searchHistory, favorites, addToFavorites, addToSearchHistory }}>
            {children}
        </MovieContext.Provider>
    );
};
