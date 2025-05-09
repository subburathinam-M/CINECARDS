    import { useParams } from 'react-router-dom';
    import series from '../../data/series';

    const SeriesDetail = () => {
    const { id } = useParams();
    const seriesItem = series.find(s => s.id === parseInt(id));

    if (!seriesItem) return <div>Series not found</div>;

    return (
        <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{seriesItem.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={seriesItem.poster} alt={seriesItem.title} className="w-full rounded-lg" />
            <div>
            <p className="text-gray-300 mb-4">{seriesItem.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                <h3 className="font-semibold">Seasons</h3>
                <p>{seriesItem.seasons}</p>
                </div>
                <div>
                <h3 className="font-semibold">Episodes</h3>
                <p>{seriesItem.episodes}</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default SeriesDetail;