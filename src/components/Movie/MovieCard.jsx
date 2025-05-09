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
            <div className="relative h-64 bg-gray-700 flex items-center justify-center overflow-hidden">
            <img 
                src={movie.poster} 
                alt={movie.title} 
                className="w-full h-auto object-cover"
            />

{/* 18+ Badge - Top Right Corner */}
{movie.isAdult && (
  <div className="absolute top-2 right-2">
    <div className="bg-red-500 text-white text-xs font-bold w-10 h-6 flex items-center justify-center rounded">
      18+
    </div>
  </div>
)}

{/* Language Badge - Adjust top based on 18+ presence */}
<div className={`absolute ${movie.isAdult ? 'top-10' : 'top-2'} right-2`}>
  <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
    {movie.language}
  </div>
</div>


     {/* Title Overlay
     <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
      <h3 className="text-white font-bold text-lg truncate">{movie.title}</h3>
      <div className="flex items-center mt-2 text-sm text-gray-300">
        <Star className="w-4 h-4 mr-1 text-yellow-400" />
        <span>{movie.rating}</span>
      </div>
    </div> */}

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