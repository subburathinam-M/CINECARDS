    import { useParams, useNavigate } from 'react-router-dom';
    import {
    Tv, Heart, ThumbsUp, ThumbsDown, Clock, Star, Languages, Calendar, ArrowLeft,
    } from 'lucide-react';
    import anime from '../../data/anime';
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
        english: 'bg-gray-500',
    };
    const normalizedLang = (lang || '').toLowerCase();
    return colors[normalizedLang] || 'bg-gray-400';
    };

    const genreIcons = {
    Action: '🎬',
    Comedy: '😂',
    Drama: '🎭',
    Horror: '😱',
    Mystery: '🕵️',
    'Sci-Fi': '🚀',
    Romance: '💖',
    Musical: '🎵',
    Historical: '📜',
    Thriller: '👻',
    Fantasy: '🧙',
    Animation: '🎨',
    Crime: '🔫',
    Adventure: '🏕️',
    };

    const AnimeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const animeItem = anime.find((a) => a.id === parseInt(id));

    if (!animeItem) return <div className="text-center py-10">Anime not found</div>;

    const {
        title = '',
        banner = '',
        description = '',
        episodes = 0,
        seasons = 0,
        year = '',
        isAdult = false,
        rating = '0.0',
        originalLanguage = 'Unknown',
        dubbedLangs = [],
        genres = [],
        likes = 0,
        dislikes = 0,
        trailerId = '',
    } = animeItem;

    return (
        <div className="max-w-6xl mx-auto">
        <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 z-50 flex items-center text-white hover:text-blue-400"
        >
            <ArrowLeft className="w-6 h-6 mr-1" />
            Back
        </button>

        {/* Banner */}
        <div className="relative aspect-[21/9] w-full">
            <img src={banner} alt={title} className="w-full h-full object-cover object-center" />

            <div className="absolute top-6 left-6 z-50">
            <BackArrow onClick={() => navigate(-1)} />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

            {isAdult && (
            <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                18+
            </div>
            )}
        </div>

        {/* Info Section */}
        <div className="relative -mt-24 z-10 px-4">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                <Tv className="w-6 h-6 text-purple-400 mr-2" />
                <h1 className="text-3xl font-bold">{title}</h1>
                </div>

                {/* Languages */}
                <div className="space-y-2 mb-6">
                <div className="flex items-center">
                    <Languages className="w-5 h-5 mr-2 text-gray-400" />
                    <span className="font-semibold mr-2">Original:</span>
                    <span
                    className={`${getLangColor(originalLanguage)} text-white px-3 py-1 rounded-full text-sm`}
                    >
                    {originalLanguage}
                    </span>
                </div>

                {dubbedLangs?.length > 0 && (
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
              {seasons} Seasons
            </div>
                <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-1" />
                    {episodes} Episodes
                </div>
                </div>

                {/* Genres */}
                <div className="flex flex-wrap gap-2 mb-6">
                {genres.map((genre) => (
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

            {/* Trailer */}
            {trailerId && (
                <div className="mb-10 md:col-span-1">
                <h2 className="text-xl font-semibold mb-3">Watch Trailer</h2>
                <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                    src={`https://www.youtube.com/embed/${trailerId}`}
                    title={`${title} Trailer`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    ></iframe>
                </div>
                </div>
            )}
            </div>
        </div>
        </div>
    );
    };

    export default AnimeDetail;
