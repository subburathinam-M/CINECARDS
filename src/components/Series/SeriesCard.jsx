    import { Link } from 'react-router-dom';

    const SeriesCard = ({ series }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <Link to={`/series/${series.id}`}>
            <img src={series.poster} alt={series.title} className="w-full h-64 object-cover" />
        </Link>
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{series.title}</h3>
            <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>{series.seasons} Seasons</span>
            <span>{series.episodes} Episodes</span>
            </div>
        </div>
        </div>
    );
    };

    export default SeriesCard;