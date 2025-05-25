import { Link } from 'react-router-dom';
import { Heart, ThumbsUp, ThumbsDown, Clock, Star, Languages,Film } from 'lucide-react';
import PropTypes from 'prop-types';

// Color mapping utility
const getLangColor = (lang) => {
  const colors = {
    tamil: 'bg-green-500',
    telugu: 'bg-orange-500',  // unchanged (you didn’t mention it)
    hindi: 'bg-orange-500',
    malayalam: 'bg-violet-500',
    kannada: 'bg-purple-500', // unchanged (you didn’t mention it)
    korean: 'bg-red-500',
    spanish: 'bg-pink-500',
    japanese: 'bg-indigo-500', // unchanged
    portuguese: 'bg-gray-500',
    english: 'bg-blue-500',
  };
  
  const normalizedLang = (lang || '').toLowerCase();
  return colors[normalizedLang] || 'bg-gray-400';
};

const MovieCard = ({ movie = {} }) => {
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

  // Default values for movie prop
  const {
    id = '',
    title = '',
    originalLanguage = 'Unknown',
    dubbedLangs = [],
    isAdult = false,
    poster = '',
    rating = '0.0',
    duration = '0',
    description = '',
    genres = [],
    year,
    likes = 0,
    dislikes = 0
  } = movie;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link to={`/movie/${id}`}>
        <div className="relative h-64 bg-gray-700 flex items-center justify-center overflow-hidden">
          <img 
            src={poster} 
            alt={title} 
            className="w-full h-auto object-cover"
          />

          {isAdult && (
            <div className="absolute top-2 right-2">
              <div className="bg-red-500 text-white text-xs font-bold w-10 h-6 flex items-center justify-center rounded">
                18+
              </div>
            </div>
          )}

          <div className={`absolute ${isAdult ? 'top-10' : 'top-2'} right-2 flex gap-2  flex-col items-end gap-2`}>
            <div className={`${getLangColor(originalLanguage)} text-white text-xs font-bold px-3 py-1 rounded-full`}>
              {originalLanguage}
            </div>

            {dubbedLangs.length > 0 && (
              <div className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                {dubbedLangs.length === 1 
                  ? `+${dubbedLangs[0]}`
                  : `+${dubbedLangs.length} langs`}
              </div>
            )}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/movie/${id}`} className="text-xl font-bold hover:text-blue-400 flex items-center">
          <Film className="w-5 h-5 text-purple-400 mr-2" />
            {title}
          </Link>
          <div className="flex items-center bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold">
            <Star className="w-4 h-4 mr-1" />
            {rating}
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-400 mb-2">
          <Languages className="w-4 h-4 mr-1" />
          <span className="mr-3">{originalLanguage}</span>
          {dubbedLangs.length > 0 && (
            <span className="text-purple-400">
              (+{dubbedLangs.length} dubbed)
            </span>
          )}
          <Clock className="w-4 h-4 mr-1 ml-2" />
          <span>{duration} mins</span>
        </div>

        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
          {genres.map(genre => (
            <span key={genre} className="bg-gray-700 px-2 py-1 rounded-full text-xs">
              {genreIcons[genre] || '🎬'} {genre}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="flex items-center text-gray-400 hover:text-green-500">
              <ThumbsUp className="w-4 h-4 mr-1" />
              <span>{likes}</span>
            </button>
            <button className="flex items-center text-gray-400 hover:text-red-500">
              <ThumbsDown className="w-4 h-4 mr-1" />
              <span>{dislikes}</span>
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

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    originalLanguage: PropTypes.string,
    dubbedLangs: PropTypes.arrayOf(PropTypes.string),
    isAdult: PropTypes.bool,
    poster: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    likes: PropTypes.number,
    dislikes: PropTypes.number
  })
};

MovieCard.defaultProps = {
  movie: {}
};

export default MovieCard;