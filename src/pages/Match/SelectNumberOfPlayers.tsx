import { Component } from 'solid-js';
import { Button } from '../../components/Button';

import styles from './SelectNumberOfPlayers.module.css';

export type SelectNumberOfPlayersProps = {
  handleChoice: (numberOfPlayers: number) => void;
};

const SelectNumberOfPlayers: Component<SelectNumberOfPlayersProps> = ({ handleChoice }) => {
  return (
    <section class={styles['select-number-of-players']}>
      <h1 class={styles['select-number-of-players__title']}>Select Number of players</h1>
      <div class={styles['select-number-of-players__buttons']}>
        <Button label='1' isBig handleClick={() => handleChoice(1)} />
        <Button label='2' isBig handleClick={() => handleChoice(2)} />
        <Button label='3' isBig handleClick={() => handleChoice(3)} />
        <Button label='4' isBig handleClick={() => handleChoice(4)} />
      </div>
    </section>
  );
};

export default SelectNumberOfPlayers;
