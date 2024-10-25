import Navbar from '../components/Navbar'; // Import Navbar component
import Footer from '../components/Footer'; // Import Footer component
import { useMovieContext } from '../context/MovieContext'; // Import the custom hook to access MovieContext

// HistoryPage component to display the user's search history
export default function HistoryPage() {
    const { searchHistory } = useMovieContext(); // Access searchHistory from MovieContext

    return (
        <div className="container mx-auto p-4 mt-16"> {/* Added mt-16 for spacing below the navbar */}
            <Navbar />
            <h1 className="text-2xl font-bold mt-4 text-center">Search History</h1> {/* Title */}
            <p className="text-gray-400 mb-4 text-center">Here are your previous search queries.</p> {/* Subtitle */}

            {/* Display search history */}
            <div className="mt-4">
                {searchHistory.length === 0 ? ( // Check if there's any search history
                    <div className="flex justify-center items-center h-64 text-center"> {/* Flex container to center the message */}
                        <p className="text-gray-500">No search history found.</p> {/* Message if no history */}
                    </div>
                ) : (
                    <ul className="list-disc pl-5"> {/* Unordered list for search queries */}
                        {searchHistory.map((query, index) => ( // Map over search history
                            <li key={index} className="text-white-700">{query}</li> // Display each query
                        ))}
                    </ul>
                )}
            </div>

            <Footer /> {/* footer at the end of the page */}
        </div>
    );
}
