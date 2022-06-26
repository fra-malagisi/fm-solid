import type { Component } from 'solid-js';
import { Home } from './pages';
import { Header } from './components/Header';
import { Routes, Route } from 'solid-app-router';
import { PlayerBoard } from './pages/match';

import styles from './App.module.css';
import { style } from 'solid-js/web';

const App: Component = () => {
  return (
    <>
      <Header title='Guess my number' />
      <main class={styles.App}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/match' element={<PlayerBoard />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
