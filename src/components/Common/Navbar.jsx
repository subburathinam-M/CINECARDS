    const Navbar = ({ activeTab, setActiveTab }) => {
        const tabs = [
        { id: 'movies', label: 'Movies' },
        { id: 'series', label: 'Series' },
        { id: 'anime', label: 'Anime' }
        ];
    
        return (
        <nav className="bg-gray-800 border-b border-gray-700">
            <div className="container mx-auto px-4">
            <div className="flex space-x-8">
                {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors duration-200 ${
                    activeTab === tab.id
                        ? 'border-blue-500 text-blue-400'
                        : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                >
                    {tab.label}
                </button>
                ))}
            </div>
            </div>
        </nav>
        );
    };
    
    export default Navbar;