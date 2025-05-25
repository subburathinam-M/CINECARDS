    import { useState } from 'react';
    import { Link } from 'react-router-dom';
    import MovieCard from './MovieCard';
    import Filter from '../Common/Filter';
    import TabNavigation from '../Common/TabNavigation';
    import movies from '../../data/movies';
    import GenrePopover from '../Common/GenrePopover';

    const MovieList = ({ searchTerm }) => {
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [activeCategory, setActiveCategory] = useState('All Movies');

    const allGenres = ['All', ...new Set(movies.flatMap(movie => movie.genres))];

    const filteredMovies = movies.filter(movie => {
        const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            movie.description.toLowerCase().includes(searchTerm.toLowerCase());
                            const matchesGenre =
  activeCategory !== 'Genre' || selectedGenre === 'All' || movie.genres.includes(selectedGenre);


        
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
        'Telugu',
    ];

    return (
        <div>
<div className="mb-6 flex items-center gap-4 flex-wrap">
<TabNavigation 
  tabs={categories} 
  activeTab={activeCategory} 
  onTabChange={(category) => {
    setActiveCategory(category);
    if (category !== 'Genre') {
      setSelectedGenre('All'); // Reset genre filter
    }
  }} 
/>


  <GenrePopover
    genres={allGenres.filter(g => g !== 'All')}
    selectedGenre={selectedGenre}  // ✅ Correct prop name
    onSelect={(genre) => {
      setSelectedGenre(genre || 'All');
      setActiveCategory('Genre');
    }}
  />
</div>



        {filteredMovies.length === 0 ? (
            <div className="text-center py-10">
            <h3 className="text-xl font-semibold">No movies found</h3>
            <p className="text-gray-400">
                {searchTerm ? 
                `No results for "${searchTerm}"` : 
                'Try changing your filter criteria'
                }
            </p>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.map(movie => (
                <Link 
                to={`/movie/${movie.id}`} 
                key={movie.id}
                className="hover:transform hover:scale-105 transition-transform duration-300"
                >
                <MovieCard movie={movie} />
                </Link>
            ))}
            </div>
        )}
        </div>
    );
    };

    export default MovieList;