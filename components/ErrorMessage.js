import React from 'react'; // Import React to create the component

// ErrorMessage component to display error messages
const ErrorMessage = ({ message }) => {
    return (
        <div className="bg-red-500 text-white p-4 rounded-md shadow-md mt-4">
            {/* Display the error message */}
            <p>{message}</p>
        </div>
    );
};

// Export the ErrorMessage component
export default ErrorMessage;
