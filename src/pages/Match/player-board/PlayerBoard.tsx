import { Component } from 'solid-js';

import styles from './PlayerBoard.module.css';

export type PlayerBoardProps = {
  numberOfPlayers: number;
};

const PlayerBoard: Component<PlayerBoardProps> = ({ numberOfPlayers }) => {
  return (
    <section class={styles['player-board']}>
      {Array.from(Array(numberOfPlayers).keys()).map(player => (
        <div class={styles['player-board__player-section']}>{player + 1}</div>
      ))}
    </section>
  );
};

export default PlayerBoard;
