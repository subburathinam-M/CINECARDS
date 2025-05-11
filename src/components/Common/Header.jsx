    import { Link } from 'react-router-dom';
    import { User } from 'lucide-react';
    import { useAuth } from '../../context/AuthContext';
    import LogoutButton from './LogoutButton';
    import Search from './Search';
    import { Film } from 'lucide-react'; 
    import LoginButton from './LoginButton';
    import SignupButton from './SignupButton';
    const Header = ({ searchTerm, setSearchTerm }) => {
    const { isAuthenticated, user, logout } = useAuth();

    return (
        <header className="bg-gray-800 py-4 px-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between gap-4">
            {/* Logo Section */}
            <Link to="/" className="flex items-center shrink-0">

            <Film 
            size={28} 
            strokeWidth={2.5} 
            className="mr-2 text-blue-400" // Add your gradient color here
            />

            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                CineCards
            </h1>
            </Link>

            {/* Search Bar Section */}
            <div className="flex-1 max-w-2xl mx-4">
            <Search 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
            />
            </div>

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-6 shrink-0">
            {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                <div className="relative group">
                    <button className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                    </div>
                    <span>{user.name}</span>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-1 z-10 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-600">
                        My Profile
                    </Link>
                    <Link to="#" className="block px-4 py-2 text-sm hover:bg-gray-600">
                        Liked Movies
                    </Link>
                    <div className="px-2 py-1 hover:bg-gray-600">
                        <LogoutButton 
                        onClick={logout}
                        className="w-full h-full"
                        />
                    </div>
                    </div>
                </div>
                </div>
            ) : (
                <div className="flex items-center space-x-4">

                <Link to="/login">
                    <LoginButton />
                </Link>

                <Link to="/signup">
                    <SignupButton />
                </Link>

                
                </div>
            )}
            </div>
        </div>
        </header>
    );
    };

    export default Header;