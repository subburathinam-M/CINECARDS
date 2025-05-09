    import { useParams } from 'react-router-dom';
    import anime from '../../data/anime';

    const AnimeDetail = () => {
    const { id } = useParams();
    const animeItem = anime.find(a => a.id === parseInt(id));

    if (!animeItem) return <div>Anime not found</div>;

    return (
        <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{animeItem.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src={animeItem.poster} alt={animeItem.title} className="w-full rounded-lg" />
            <div>
            <p className="text-gray-300 mb-4">{animeItem.description}</p>
            {animeItem.type === 'series' && (
                <div className="mb-4">
                <h3 className="font-semibold">Episodes</h3>
                <p>{animeItem.episodes}</p>
                </div>
            )}
            </div>
        </div>
        </div>
    );
    };

    export default AnimeDetail;