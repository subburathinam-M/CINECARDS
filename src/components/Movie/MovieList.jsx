    import { useState } from 'react';
    import MovieCard from './MovieCard';
    import Filter from '../Common/Filter';
    import Search from '../Common/Search';
    import TabNavigation from '../Common/TabNavigation';
    import movies from '../../data/movies';

    const MovieList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [activeCategory, setActiveCategory] = useState('All Movies');

    // Get all unique genres from movies
    const allGenres = ['All', ...new Set(movies.flatMap(movie => movie.genres))];

    // Filter movies based on search term and selected genre
    const filteredMovies = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            movie.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesGenre = selectedGenre === 'All' || movie.genres.includes(selectedGenre);
        
        // Additional filtering based on category
        let matchesCategory = true;
        if (activeCategory === 'Underrated') {
        matchesCategory = movie.rating < 7;
        } else if (activeCategory === 'Favorites') {
        matchesCategory = movie.likes > 1000;
        } else if (activeCategory === 'Old Movies') {
        matchesCategory = movie.year < 2000;
        } else if (activeCategory === 'New Movies') {
        matchesCategory = movie.year >= 2020;
        } else if (activeCategory === 'Hollywood') {
        matchesCategory = movie.language === 'English';
        } else if (activeCategory === 'Tamil') {
        matchesCategory = movie.language === 'Tamil';
        } else if (activeCategory === 'Top Tamil') {
        matchesCategory = movie.language === 'Tamil' && movie.rating >= 8;
        } else if (activeCategory === 'Malayalam') {
        matchesCategory = movie.language === 'Malayalam';
        } else if (activeCategory === 'Telugu') {
        matchesCategory = movie.language === 'Telugu';
        }
        
        return matchesSearch && matchesGenre && matchesCategory;
    });

    const categories = [
        'All Movies',
        'Underrated',
        'Favorites',
        'Old Movies',
        'New Movies',
        'Hollywood',
        'Tamil',
        'Top Tamil',
        'Malayalam',
        'Telugu'
    ];

    return (
        <div>
        <div className="mb-8">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <div className="mb-6">
            <Filter 
            options={allGenres} 
            selected={selectedGenre} 
            onSelect={setSelectedGenre} 
            />
        </div>

        <div className="mb-8">
            <TabNavigation 
            tabs={categories} 
            activeTab={activeCategory} 
            onTabChange={setActiveCategory} 
            />
        </div>

        {filteredMovies.length === 0 ? (
            <div className="text-center py-10">
            <h3 className="text-xl font-semibold">No movies found</h3>
            <p className="text-gray-400">Try changing your search or filter criteria</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            </div>
        )}
        </div>
    );
    };

    export default MovieList;