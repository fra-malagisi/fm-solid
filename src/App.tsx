import type { Component } from 'solid-js';

import styles from './App.module.css';
import { Button } from './components/button';

const App: Component = () => {
  return (
    <main class={styles.App}>
      <Button label='Submit' />
    </main>
  );
};

export default App;
