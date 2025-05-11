import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Common/Header';
import Navbar from './components/Common/Navbar';
import MovieList from './components/Movie/MovieList';
import SeriesList from './components/Series/SeriesList';
import AnimeList from './components/Anime/AnimeList';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import MovieDetail from './components/Movie/MovieDetail';
import SeriesDetail from './components/Series/SeriesDetail';
import AnimeDetail from './components/Anime/AnimeDetail';

function App() {
  const [activeTab, setActiveTab] = useState('movies');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <AuthProvider>
      <BrowserRouter basename="/CINECARDS">
        <div className="min-h-screen bg-gray-900 text-white">
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <main className="mx-auto py-8 px-5 max-w-[100vw]">
            <Routes>
              {/* Single root route with searchTerm prop */}
              <Route 
                path="/" 
                element={
                  activeTab === 'movies' ? 
                    <MovieList searchTerm={searchTerm} /> :
                  activeTab === 'series' ? 
                    <SeriesList searchTerm={searchTerm} /> :
                    <AnimeList searchTerm={searchTerm} />
                } 
              />
              
              {/* Additional routes with searchTerm */}
              <Route path="/movies" element={<MovieList searchTerm={searchTerm} />} />
              <Route path="/series" element={<SeriesList searchTerm={searchTerm} />} />
              <Route path="/anime" element={<AnimeList searchTerm={searchTerm} />} />
              
              {/* Detail pages */}
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="/series/:id" element={<SeriesDetail />} />
              <Route path="/anime/:id" element={<AnimeDetail />} />
              
              {/* Auth pages */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;