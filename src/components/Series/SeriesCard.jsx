    import { Link } from 'react-router-dom';
    import { Tv, Clock, Languages } from 'lucide-react';
    import PropTypes from 'prop-types';

    // Genre icon map
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

    // Language badge color
    const getLangColor = (lang) => {
    const colors = {
        tamil: 'bg-green-500',
        telugu: 'bg-orange-500',
        hindi: 'bg-orange-500',
        malayalam: 'bg-violet-500',
        kannada: 'bg-purple-500',
        korean: 'bg-red-500',
        spanish: 'bg-pink-500',
        japanese: 'bg-indigo-500',
        portuguese: 'bg-gray-500',
        english: 'bg-blue-500',
    };

    const normalizedLang = (lang || '').toLowerCase();
    return colors[normalizedLang] || 'bg-gray-400';
    };

    const SeriesCard = ({ series = {} }) => {
    const {
        id = '',
        title = '',
        poster = '',
        seasons = 0,
        episodes = 0,
        isAdult = false,
        originalLanguage = 'Unknown',
        dubbedLangs = [],
        description = '',
        genres = [],
        year = '',            // ➕ NEW
        rating = null                // ➕ NEW
    } = series;

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Link to={`/series/${id}`}>
            <div className="relative h-64 bg-gray-700 flex items-center justify-center overflow-hidden">
            <img 
                src={poster} 
                alt={title} 
                className="w-full h-full object-cover"
            />

            {isAdult && (
                <div className="absolute top-2 right-2">
                <div className="bg-red-500 text-white text-xs font-bold w-10 h-6 flex items-center justify-center rounded">
                    18+
                </div>
                </div>
            )}

            <div className={`absolute ${isAdult ? 'top-10' : 'top-2'} right-2 flex flex-col items-end gap-2`}>
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
  <div className="flex items-center mb-2">
    <Tv className="w-5 h-5 text-purple-400 mr-2" />
    
    {/* Title + Year */}
    <Link 
      to={`/series/${id}`} 
      className="text-xl font-bold hover:text-blue-400 flex items-center gap-2"
    >
      {title}
      {year && <span className="text-sm text-gray-400">({year})</span>}
    </Link>

    {/* Star Rating - same line */}
    {rating !== null && (
      <div className="flex items-center text-sm text-yellow-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4 mr-1" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.568L24 9.423l-6 5.926L19.335 24 12 19.897 4.665 24 6 15.349 0 9.423l8.332-1.268z"/>
        </svg>
        <span>{rating} / 10</span>
      </div>
    )}
            </div>

            <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>{seasons} Seasons</span>
            <span>{episodes} Episodes</span>
            </div>

            <div className="flex items-center text-sm text-gray-400 mb-2">
            <Languages className="w-4 h-4 mr-1" />
            <span className="mr-3">{originalLanguage}</span>
            {dubbedLangs.length > 0 && (
                <span className="text-purple-400">
                (+{dubbedLangs.length} dubbed)
                </span>
            )}
            </div>

            <p className="text-gray-300 text-sm mb-3 line-clamp-2">
            {description}
            </p>

            <div className="flex flex-wrap gap-2">
            {genres.slice(0, 3).map((genre) => (
                <span 
                key={genre} 
                className="bg-gray-700 px-2 py-1 rounded-full text-xs"
                >
                {genreIcons[genre] || '🎬'} {genre}
                </span>
            ))}

            {genres.length > 3 && (
                <span className="bg-gray-500 px-2 py-1 rounded-full text-xs text-white">
                +{genres.length - 3}
                </span>
            )}
            
            </div>

            
        </div>
        </div>
    );
    };

    SeriesCard.propTypes = {
    series: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        poster: PropTypes.string,
        seasons: PropTypes.number,
        episodes: PropTypes.number,
        isAdult: PropTypes.bool,
        originalLanguage: PropTypes.string,
        dubbedLangs: PropTypes.arrayOf(PropTypes.string),
        description: PropTypes.string,
        genres: PropTypes.arrayOf(PropTypes.string)
    })
    };

    SeriesCard.defaultProps = {
    series: {}
    };

    export default SeriesCard;
