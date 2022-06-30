import { Component } from 'solid-js';
import { ChanceMarker } from '../chance-marker';

import styles from './PlayerSection.module.css';

export type PlayerSectionProps = {
  player: number;
  chances: number;
};

const PlayerSection: Component<PlayerSectionProps> = ({ player, chances }) => {
  return (
    <div class={styles['player-section']}>
      {Array.from(Array(chances).keys()).map(chance => (
        <ChanceMarker />
      ))}
    </div>
  );
};

export default PlayerSection;
