import { Component } from 'solid-js';
import { TextField } from '../../../components/TextField';
import { useMatch } from '../../../contexts/match.context';
import { ChanceMarker } from '../chance-marker';

import styles from './PlayerSection.module.css';

export type PlayerSectionProps = {
  player: number;
  chances: number;
};

const PlayerSection: Component<PlayerSectionProps> = ({ player, chances }) => {
  const { matchInfo } = useMatch();

  return (
    <div
      classList={{
        [styles['player-section']]: true,
        [styles['player-section--active']]: matchInfo.activePlayer === player,
      }}
    >
      <h2>Player {player}</h2>
      <div class={styles['player-section__chances']}>
        {Array.from(Array(chances).keys()).map(chance => (
          <ChanceMarker />
        ))}
      </div>
      {matchInfo.isMatchStarted && matchInfo.activePlayer === player ? (
        <TextField id='prova' name='prova' value='' label='Digit a number' disabled={false} />
      ) : (
        <TextField id='prova' name='prova' value='' label='Digit a number' disabled={true} />
      )}
    </div>
  );
};

export default PlayerSection;
