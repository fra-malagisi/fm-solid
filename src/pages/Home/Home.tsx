import { Component } from 'solid-js';
import { Button } from '../../components/Button';
import { useNavigate } from 'solid-app-router';

import styles from './Home.module.css';
import { style } from 'solid-js/web';

const Home: Component = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    console.log('prova');
    navigate('/match', { replace: true });
  };

  return (
    <div class={styles.Home}>
      <Button label='Start' handleClick={handleStart} />
    </div>
  );
};

export default Home;
