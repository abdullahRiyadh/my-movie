import React, { useState } from 'react'; // Import React and useState to manage input state

// SearchBar component to allow users to search for movies
const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState(''); // State to hold the search query

    // Handle input change
    const handleChange = (event) => {
        setQuery(event.target.value); // Update query state with input value
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page reload on form submission
        onSearch(query); // Call the onSearch function with the current query
        setQuery(''); // Clear the input field after submitting
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center mt-4 text-slate-900">
            <input 
                type="text" 
                value={query} // Bind input value to query state
                onChange={handleChange} // Update query state on input change
                placeholder="Search for movies..." // Placeholder text
                className="border border-gray-300 rounded-l-md py-2 px-4 w-64" // Style for the input field
            />
            <button 
                type="submit" // Button type for submitting the form
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-r-md" // Style for the button
            >
                Search
            </button>
        </form>
    );
};

// Export the SearchBar component
export default SearchBar;
