    import { Link } from 'react-router-dom';
    import { Heart, ThumbsUp, ThumbsDown, Clock, Star, Languages } from 'lucide-react';

    const MovieCard = ({ movie }) => {
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

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Link to={`/movie/${movie.id}`}>
            <div className="relative">
            <img 
                src={movie.poster} 
                alt={movie.title} 
                className="w-full h-64 object-cover"
            />
            {movie.isAdult && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                18+
                </div>
            )}
            </div>
        </Link>

        <div className="p-4">
            <div className="flex justify-between items-start mb-2">
            <Link to={`/movie/${movie.id}`} className="text-xl font-bold hover:text-blue-400">
                {movie.title}
            </Link>
            <div className="flex items-center bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold">
                <Star className="w-4 h-4 mr-1" />
                {movie.rating}
            </div>
            </div>

            <div className="flex items-center text-sm text-gray-400 mb-2">
            <Languages className="w-4 h-4 mr-1" />
            <span className="mr-3">{movie.language}</span>
            <Clock className="w-4 h-4 mr-1" />
            <span>{movie.duration} mins</span>
            </div>

            <p className="text-gray-300 text-sm mb-3 line-clamp-2">{movie.description}</p>

            <div className="flex flex-wrap gap-2 mb-3">
            {movie.genres.map(genre => (
                <span key={genre} className="bg-gray-700 px-2 py-1 rounded-full text-xs">
                {genreIcons[genre] || '🎬'} {genre}
                </span>
            ))}
            </div>

            <div className="flex justify-between items-center">
            <div className="flex space-x-2">
                <button className="flex items-center text-gray-400 hover:text-green-500">
                <ThumbsUp className="w-4 h-4 mr-1" />
                <span>{movie.likes}</span>
                </button>
                <button className="flex items-center text-gray-400 hover:text-red-500">
                <ThumbsDown className="w-4 h-4 mr-1" />
                <span>{movie.dislikes}</span>
                </button>
            </div>
            <button className="text-gray-400 hover:text-red-500">
                <Heart className="w-5 h-5" />
            </button>
            </div>
        </div>
        </div>
    );
    };

    export default MovieCard;