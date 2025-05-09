    import { Link } from 'react-router-dom';

    const AnimeCard = ({ anime }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <Link to={`/anime/${anime.id}`}>
            <img src={anime.poster} alt={anime.title} className="w-full h-64 object-cover" />
        </Link>
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{anime.title}</h3>
            {anime.type === 'series' && (
            <div className="text-sm text-gray-400">
                {anime.episodes} Episodes
            </div>
            )}
        </div>
        </div>
    );
    };

    export default AnimeCard;