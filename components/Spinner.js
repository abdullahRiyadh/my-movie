import React from 'react'; // Import React to create the component

// Spinner component to indicate loading status
const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-screen"> {/* Center the spinner on the screen */}
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600 border-solid"></div> {/* Spinner style */}
        </div>
    );
};

// Export the Spinner component
export default Spinner;
