    import { NavLink } from 'react-router-dom';

    const Navbar = () => {
    const tabs = [
        { id: 'movies', label: 'Movies', path: '/movies' },
        { id: 'series', label: 'Series', path: '/series' },
        { id: 'anime', label: 'Anime', path: '/anime' }
    ];


    
    return (
        <nav className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-4">
            <div className="flex space-x-8">
            {tabs.map(tab => (
                <NavLink
                key={tab.id}
                to={tab.path}
                className={({ isActive }) => 
                    `px-4 py-3 font-medium text-sm border-b-2 transition-colors duration-200 ${
                    isActive 
                        ? 'border-blue-500 text-blue-400' 
                        : 'border-transparent text-gray-400 hover:text-white'
                    }`
                }
                >
                {tab.label}
                </NavLink>
            ))}
            </div>
        </div>
        </nav>
    );
    };

    export default Navbar;