import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <main class={styles.App}>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        class={styles.link}
        href='https://github.com/solidjs/solid'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn Solid
      </a>
    </main>
  );
};

export default App;
