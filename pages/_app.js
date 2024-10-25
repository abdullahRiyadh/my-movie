import '../styles/globals.css'; // Import global CSS styles
import { MovieProvider } from '../context/MovieContext'; // Import MovieProvider for global state management

// Custom App component to initialize pages
function MyApp({ Component, pageProps }) {
    return (
        <MovieProvider> {/* Wrap the application with the MovieProvider to manage state */}
            <Component {...pageProps} /> {/* Render the current page */}
        </MovieProvider>
    );
}

// Export the custom App component
export default MyApp;
