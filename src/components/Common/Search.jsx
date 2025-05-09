    const Search = ({ searchTerm, setSearchTerm }) => {
        return (
        <div className="relative max-w-2xl mx-auto">
            <input
            type="text"
            placeholder="Search for movies, series, anime..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-700 rounded-full py-3 px-5 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-4 top-3.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            </div>
        </div>
        );
    };
    
    export default Search;