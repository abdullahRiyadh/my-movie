import React from 'react'; // Import React to create the component

// Footer component to display the application's footer
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-4 mt-8"> {/* Footer styling */}
            <div className="container mx-auto text-center"> {/* Center content within the footer */}
                <p className="text-sm"> {/* Small text for copyright notice */}
                    &copy; {new Date().getFullYear()} MovieApp. All rights reserved.
                </p>
                
            </div>
        </footer>
    );
};

// Export the Footer component
export default Footer;
