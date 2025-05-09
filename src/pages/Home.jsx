    import { movies } from '../data/movies';
    import { Link } from 'react-router-dom';

    export default function Home() {
    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
        <header className="flex justify-between items-center mb-6">
            <h1 className="text-purple-400 text-3xl font-bold">🎬 CineCards</h1>
            <div className="space-x-4">
            <button className="text-sm">Login</button>
            <button className="bg-purple-500 px-3 py-1 rounded text-sm">Sign Up</button>
            </div>
        </header>

        <h2 className="text-xl font-semibold mb-4">All Movies</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {movies.map((movie) => (
            <Link
                key={movie.id}
                to={`/movie/${movie.id}`}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-[1.02] transition"
            >
                <img src={movie.image} alt={movie.title} className="w-full h-60 object-cover" />
                <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{movie.title}</h3>
                <p className="text-sm text-yellow-400 mb-2">⭐ {movie.rating}/10</p>
                <div className="flex gap-2 flex-wrap">
                    {movie.genres.map((genre) => (
                    <span
                        key={genre}
                        className="bg-gray-700 text-xs px-2 py-1 rounded-full text-purple-300"
                    >
                        {genre}
                    </span>
                    ))}
                </div>
                </div>
            </Link>
            ))}
        </div>
        </div>
    );
    }