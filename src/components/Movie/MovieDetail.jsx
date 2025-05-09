    import { useParams } from 'react-router-dom';
    import { Heart, ThumbsUp, ThumbsDown, Clock, Star, Languages, Calendar } from 'lucide-react';
    import movies from '../../data/movies';

    const MovieDetail = () => {
    const { id } = useParams();
    const movie = movies.find(m => m.id === parseInt(id));

    const genreIcons = {
        'Action': '🎬',
        'Comedy': '😂',
        'Drama': '🎭',
        'Horror': '😱',
        'Mystery': '🕵️',
        'Sci-Fi': '🚀',
        'Romance': '💖',
        'Musical': '🎵',
        'Historical': '📜',
        'Thriller': '👻',
        'Fantasy': '🧙',
        'Animation': '🎨',
        'Crime': '🔫',
        'Adventure': '🏕️'
    };

    if (!movie) {
        return <div className="text-center py-10">Movie not found</div>;
    }

    return (
        <div className="max-w-6xl mx-auto">
        {/* Banner */}
        <div className="relative h-64 md:h-96 w-full">
            <img 
            src={movie.banner} 
            alt={movie.title} 
            className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            {movie.isAdult && (
            <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                18+
            </div>
            )}
        </div>

        {/* Movie Info */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center bg-yellow-500 text-black px-3 py-1 rounded font-bold">
                <Star className="w-5 h-5 mr-1" />
                {movie.rating}
                </div>
                
                <div className="flex items-center text-gray-300">
                <Calendar className="w-5 h-5 mr-1" />
                {movie.year}
                </div>
                
                <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-1" />
                {movie.duration} mins
                </div>
                
                <div className="flex items-center text-gray-300">
                <Languages className="w-5 h-5 mr-1" />
                {movie.language}
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map(genre => (
                <span key={genre} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {genreIcons[genre] || '🎬'} {genre}
                </span>
                ))}
            </div>

            <h2 className="text-xl font-semibold mb-2">Overview</h2>
            <p className="text-gray-300 mb-6">{movie.description}</p>

            <div className="flex space-x-4 mb-8">
                <button className="flex items-center bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg">
                <ThumbsUp className="w-5 h-5 mr-2" />
                <span>Like ({movie.likes})</span>
                </button>
                <button className="flex items-center bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg">
                <ThumbsDown className="w-5 h-5 mr-2" />
                <span>Dislike ({movie.dislikes})</span>
                </button>
                <button className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                <Heart className="w-5 h-5 mr-2" />
                <span>Favorite</span>
                </button>
            </div>
            </div>

            <div>
            <div className="bg-gray-800 p-4 rounded-lg sticky top-4">
                <h3 className="text-xl font-semibold mb-4">Trailer</h3>
                <div className="aspect-w-16 aspect-h-9">
                <iframe 
                    className="w-full h-64 rounded"
                    src={`https://www.youtube.com/embed/${movie.trailerId}`}
                    title={`${movie.title} Trailer`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default MovieDetail;