import { Component } from 'solid-js';
import { PlayerSection } from '../player-section';
import imgUrl from '../../../assets/images/question-mark.png';

import styles from './PlayerBoard.module.css';

export type PlayerBoardProps = {
  numberOfPlayers: number;
  chances: number;
  randomNumber: number;
};

const PlayerBoard: Component<PlayerBoardProps> = ({ numberOfPlayers, chances, randomNumber }) => {
  return (
    <section class={styles['player-board']}>
      {Array.from(Array(numberOfPlayers).keys()).map(player => (
        <PlayerSection player={player + 1} chances={chances} />
      ))}
      <div class={styles['player-board__random-number']}>
        <img class={styles['player-board__question-image']} src={imgUrl} />
      </div>
    </section>
  );
};

export default PlayerBoard;
