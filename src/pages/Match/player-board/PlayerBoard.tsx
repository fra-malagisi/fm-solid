import { Component } from 'solid-js';
import { PlayerSection } from '../player-section';

import styles from './PlayerBoard.module.css';

export type PlayerBoardProps = {
  numberOfPlayers: number;
  chances: number;
};

const PlayerBoard: Component<PlayerBoardProps> = ({ numberOfPlayers, chances }) => {
  return (
    <section class={styles['player-board']}>
      {Array.from(Array(numberOfPlayers).keys()).map(player => (
        <PlayerSection player={player + 1} chances={chances} />
      ))}
      <div class={styles['player-board__random-number']}></div>
    </section>
  );
};

export default PlayerBoard;
