    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import AnimeCard from './AnimeCard';
    import TabNavigation from '../Common/TabNavigation';
    import anime from '../../data/anime';

    const AnimeList = ({ searchTerm }) => {
    const [activeCategory, setActiveCategory] = useState('All Anime');
    
    const categories = [
        'All Anime',
        'Anime Series'
    ];

    const filteredAnime = anime.filter(animeItem => {
        const matchesSearch = animeItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            animeItem.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (activeCategory === 'All Anime') return matchesSearch;
        if (activeCategory === 'Anime Series') return matchesSearch && animeItem.type === 'series';
        return matchesSearch;
    });

    return (
        <div>
        <TabNavigation 
            tabs={categories}
            activeTab={activeCategory}
            onTabChange={setActiveCategory}
        />
        
        {filteredAnime.length === 0 ? (
            <div className="text-center py-10">
            <h3 className="text-xl font-semibold">No anime found</h3>
            <p className="text-gray-400">
                {searchTerm ? 
                `No results for "${searchTerm}"` : 
                'Try changing your filter criteria'
                }
            </p>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {filteredAnime.map(animeItem => (
                <Link
                to={`/anime/${animeItem.id}`}
                key={animeItem.id}
                className="hover:transform hover:scale-105 transition-transform duration-300"
                >
                <AnimeCard anime={animeItem} />
                </Link>
            ))}
            </div>
        )}
        </div>
    );
    };

    export default AnimeList;