import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  // Correct path
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

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Header />
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={
                activeTab === 'movies' ? <MovieList /> :
                activeTab === 'series' ? <SeriesList /> :
                <AnimeList />
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/movie/:id" element={<MovieDetail />} />
              <Route path="/series/:id" element={<SeriesDetail />} />
              <Route path="/anime/:id" element={<AnimeDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;