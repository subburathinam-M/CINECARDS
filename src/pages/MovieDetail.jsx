    import { useParams, Link } from 'react-router-dom';
    import { movies } from '../data/movies';

    export default function MovieDetail() {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === id);

    if (!movie) return <div className="text-white p-6">Movie not found.</div>;

    return (
        <div className="bg-gray-900 text-white min-h-screen">
        <div
            className="w-full h-80 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${movie.image})` }}
        >
            <Link to="/" className="absolute top-4 left-4 bg-black/70 p-2 rounded">← Back</Link>
        </div>

        <div className="p-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">{movie.title}</h2>
            <p className="text-sm text-purple-300 mb-4">Original: {movie.originalLanguage}</p>
            <p className="text-yellow-400 mb-4">⭐ {movie.rating}/10</p>

            <div className="flex flex-wrap gap-2 mb-4">
            {movie.genres.map((g) => (
                <span
                key={g}
                className="bg-gray-700 text-xs px-2 py-1 rounded-full text-purple-300"
                >
                {g}
                </span>
            ))}
            </div>

            <div className="mb-4 text-sm text-gray-300">
            <p><strong>Release Year:</strong> {movie.year}</p>
            <p><strong>Duration:</strong> {movie.duration}</p>
            </div>

            <div className="mb-6">
            <h3 className="font-semibold text-lg mb-1">Overview</h3>
            <p className="text-gray-300 text-sm">{movie.description}</p>
            </div>

            <div>
            <h3 className="font-semibold text-lg mb-2">Official Trailer</h3>
            <iframe
                className="w-full h-64 rounded"
                src={movie.trailer}
                title="Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
        </div>
        </div>
    );
    }
