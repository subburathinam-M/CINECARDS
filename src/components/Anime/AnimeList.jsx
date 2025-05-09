    import { useState } from 'react';
    import AnimeCard from './AnimeCard';
    import TabNavigation from '../Common/TabNavigation';
    import anime from '../../data/anime';

    const AnimeList = () => {
    const [activeCategory, setActiveCategory] = useState('All Anime');
    
    const categories = [
        'All Anime',
        'Anime Series'
    ];

    // Filter anime based on category
    const filteredAnime = anime.filter(item => {
        if (activeCategory === 'All Anime') return true;
        if (activeCategory === 'Anime Series') return item.type === 'series';
        return true;
    });

    return (
        <div>
        <TabNavigation 
            tabs={categories}
            activeTab={activeCategory}
            onTabChange={setActiveCategory}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAnime.map(anime => (
            <AnimeCard key={anime.id} anime={anime} />
            ))}
        </div>
        </div>
    );
    };

    export default AnimeList;