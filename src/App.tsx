import type { Component } from 'solid-js';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Routes, Route } from 'solid-app-router';
import { Match } from './pages/Match';

const App: Component = () => {
  return (
    <>
      <Header title='Guess my number' />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/match' element={<Match />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
