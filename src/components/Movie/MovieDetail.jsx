    import { useParams, useNavigate } from 'react-router-dom';
    import { Heart, ThumbsUp, ThumbsDown, Clock, Star, Languages, Calendar, ArrowLeft } from 'lucide-react';
    import movies from '../../data/movies';
    import BackArrow from '../Common/BackArrow';

    const getLangColor = (lang) => {
    const colors = {
        tamil: 'bg-blue-500',
        telugu: 'bg-orange-500',
        hindi: 'bg-green-500',
        malayalam: 'bg-yellow-500',
        kannada: 'bg-purple-500',
        korean: 'bg-red-500',
        spanish: 'bg-pink-500',
        japanese: 'bg-indigo-500',
        portuguese: 'bg-teal-500',
        english: 'bg-gray-500'
    };
    const normalizedLang = (lang || '').toLowerCase();
    return colors[normalizedLang] || 'bg-gray-400';
    };

    const MovieDetail = () => {
    const navigate = useNavigate();
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

    // Destructure movie properties with defaults
    const {
        title = '',
        originalLanguage = 'Unknown',
        dubbedLangs = [],
        isAdult = false,
        banner = '',
        rating = '0.0',
        year = '',
        duration = '0',
        description = '',
        genres = [],
        likes = 0,
        dislikes = 0,
        trailerId = ''
    } = movie;

    return (
        <div className="max-w-6xl mx-auto">
        <button 
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 z-50 flex items-center text-white hover:text-blue-400"
        >
            <ArrowLeft className="w-6 h-6 mr-1" />
            Back
        </button>

        {/* Banner Section */}
        <div className="relative aspect-[21/9] w-full">
            <img 
            src={banner} 
            alt={title} 
            className="w-full h-full object-cover object-center"    
            />

            {/* Back Arrow */}
            <div className="absolute top-6 left-6 z-50">
            <BackArrow onClick={() => navigate(-1)} />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div> {/* this is a gradient overlay to make the banner darker */}
            
            {isAdult && (
            <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                18+
            </div>
            )}
        </div>

        {/* Movie Info Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>

            {/* Language Section - Now with Languages icon */}
            <div className="space-y-2 mb-6">
                <div className="flex items-center">
                <Languages className="w-5 h-5 mr-2 text-gray-400" />
                <span className="font-semibold mr-2">Original:</span>
                <span className={`${getLangColor(originalLanguage)} text-white px-3 py-1 rounded-full text-sm`}>
                    {originalLanguage}
                </span>
                </div>

                {dubbedLangs.length > 0 && (
                <div className="flex items-center">
                    <Languages className="w-5 h-5 mr-2 text-gray-400" />
                    <span className="font-semibold mr-2">Dubbed:</span>
                    <div className="flex flex-wrap gap-2">
                    {dubbedLangs.map((lang) => (
                        <span 
                        key={lang}
                        className={`${getLangColor(lang)} text-white px-3 py-1 rounded-full text-sm`}
                        >
                        {lang}
                        </span>
                    ))}
                    </div>
                </div>
                )}
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center bg-yellow-500 text-black px-3 py-1 rounded font-bold">
                <Star className="w-5 h-5 mr-1" />
                {rating}
                </div>
                <div className="flex items-center text-gray-300">
                <Calendar className="w-5 h-5 mr-1" />
                {year}
                </div>
                <div className="flex items-center text-gray-300">
                <Clock className="w-5 h-5 mr-1" />
                {duration} mins
                </div>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-6">
                {genres.map(genre => (
                <span key={genre} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {genreIcons[genre] || '🎬'} {genre}
                </span>
                ))}
            </div>

            {/* Overview */}
            <h2 className="text-xl font-semibold mb-3">Overview</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">{description}</p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
                <button className="flex items-center bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors">
                <ThumbsUp className="w-5 h-5 mr-2" />
                <span>Like ({likes})</span>
                </button>
                <button className="flex items-center bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors">
                <ThumbsDown className="w-5 h-5 mr-2" />
                <span>Dislike ({dislikes})</span>
                </button>
                <button className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                <Heart className="w-5 h-5 mr-2" />
                <span>Favorite</span>
                </button>
            </div>
            </div>

            {/* Trailer Section */}
            <div className="md:sticky md:top-4 h-fit">
            <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Trailer</h3>
                <div className="aspect-w-16 aspect-h-9">
                <iframe 
                    className="w-full rounded-lg"
                    src={`https://www.youtube.com/embed/${trailerId}`}
                    title={`${title} Trailer`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    height="315"
                ></iframe>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default MovieDetail;