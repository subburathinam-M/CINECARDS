    import { useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { useAuth } from '../../context/AuthContext';

    const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        
        // Simple validation
        if (!name || !email || !password || !confirmPassword) {
        setError('Please fill in all fields');
        return;
        }
        
        if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
        }
        
        // Mock signup - in a real app, this would be an API call
        login({
        name: name,
        email: email
        });
        
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
            <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                Create a new account
            </h2>
            </div>
            
            {error && (
            <div className="bg-red-500 text-white p-3 rounded-md text-sm">
                {error}
            </div>
            )}
            
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Full Name"
                />
                </div>
                
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                />
                </div>
                
                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                />
                </div>
                
                <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300 mb-1">
                    Confirm Password
                </label>
                <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none relative block w-full px-3 py-3 bg-gray-700 border border-gray-600 rounded-md placeholder-gray-400 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                />
                </div>
            </div>

            <div className="flex items-center">
                <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                I agree to the <Link to="#" className="text-blue-400 hover:text-blue-300">Terms and Conditions</Link>
                </label>
            </div>

            <div>
                <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                Sign Up
                </button>
            </div>
            </form>
            
            <div className="text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:text-blue-300">
                Sign in
            </Link>
            </div>
        </div>
        </div>
    );
    };

    export default Signup;