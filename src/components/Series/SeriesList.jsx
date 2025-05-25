    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import SeriesCard from './SeriesCard';
    import TabNavigation from '../Common/TabNavigation';
    import series from '../../data/series';

    const SeriesList = ({ searchTerm }) => {
    const [activeCategory, setActiveCategory] = useState('All Series');
    
    const categories = [
        'All Series',
        'Popular Series', 
        'Tamil Series',
        'Favorite Series'
    ];

    const filteredSeries = series.filter(seriesItem => {
        const matchesSearch = seriesItem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            seriesItem.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (activeCategory === 'All Series') return matchesSearch;
        if (activeCategory === 'Popular Series') return matchesSearch && seriesItem.rating > 8;
        if (activeCategory === 'Tamil Series') return matchesSearch && seriesItem.language === 'Tamil';
        if (activeCategory === 'Favorite Series') return matchesSearch && seriesItem.isFavorite;
        return matchesSearch;
    });

    return (
        <div>
        <TabNavigation 
            tabs={categories}
            activeTab={activeCategory}
            onTabChange={setActiveCategory}
        />
        
        {filteredSeries.length === 0 ? (
            <div className="text-center py-10">
            <h3 className="text-xl font-semibold">No series found</h3>
            <p className="text-gray-400">
                {searchTerm ? 
                `No results for "${searchTerm}"` : 
                'Try changing your filter criteria'
                }
            </p>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {filteredSeries.map(seriesItem => (
                <Link
                to={`/series/${seriesItem.id}`}
                key={seriesItem.id}
                className="hover:transform hover:scale-105 transition-transform duration-300"
                >
                <SeriesCard series={seriesItem} />
                </Link>
            ))}
            </div>
        )}
        </div>
    );
    };

    export default SeriesList;