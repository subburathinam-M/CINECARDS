    import { useState } from 'react';
    import SeriesCard from './SeriesCard';
    import TabNavigation from '../Common/TabNavigation';
    import series from '../../data/series';

    const SeriesList = () => {
    const [activeCategory, setActiveCategory] = useState('All Series');
    
    const categories = [
        'All Series',
        'Popular Series', 
        'Tamil Series',
        'Favorite Series'
    ];

    // Filter series based on category
    const filteredSeries = series.filter(series => {
        if (activeCategory === 'All Series') return true;
        if (activeCategory === 'Popular Series') return series.rating > 8;
        if (activeCategory === 'Tamil Series') return series.language === 'Tamil';
        if (activeCategory === 'Favorite Series') return series.isFavorite;
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
            {filteredSeries.map(series => (
            <SeriesCard key={series.id} series={series} />
            ))}
        </div>
        </div>
    );
    };

    export default SeriesList;