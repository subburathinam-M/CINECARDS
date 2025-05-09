    import { Link } from 'react-router-dom';
    import { Search, User, LogIn } from 'lucide-react';
    // Example from Header.jsx
import { useAuth } from '../../context/AuthContext';  // Correct path

    const Header = () => {
    const { isAuthenticated, user, logout } = useAuth();

    return (
        <header className="bg-gray-800 py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                CineCards
            </h1>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                <div className="relative group">
                    <button className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                    </div>
                    <span>{user.name}</span>
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    <Link 
                        to="#" 
                        className="block px-4 py-2 text-sm hover:bg-gray-600"
                    >
                        My Profile
                    </Link>
                    <Link 
                        to="#" 
                        className="block px-4 py-2 text-sm hover:bg-gray-600"
                    >
                        Liked Movies
                    </Link>
                    <button 
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-600"
                    >
                        Logout
                    </button>
                    </div>
                </div>
                </div>
            ) : (
                <div className="flex items-center space-x-4">
                <Link 
                    to="/login" 
                    className="flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
                >
                    <LogIn className="w-5 h-5 mr-2" />
                    Login
                </Link>
                <Link 
                    to="/signup" 
                    className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600"
                >
                    Sign Up
                </Link>
                </div>
            )}
            </div>
        </div>
        </header>
    );
    };

    export default Header;