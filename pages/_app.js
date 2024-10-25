import Navbar from '../components/Navbar';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <main className="pt-16">  {/* pt-16 to offset fixed Navbar height */}
                <Component {...pageProps} />
            </main>
        </>
    );
}
