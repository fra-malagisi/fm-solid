import { Component, createEffect, createSignal, For, Show } from 'solid-js';
import { TextField } from '../../../components/TextField';
import { useMatch } from '../../../contexts/match.context';
import { ChanceMarker } from '../chance-marker';

import styles from './PlayerSection.module.css';

export type PlayerSectionProps = {
  player: number;
  chances: number;
};

const PlayerSection: Component<PlayerSectionProps> = ({ player, chances }) => {
  const { matchInfo, isActivePlayer, nextPlayer } = useMatch();
  let textField: any;

  const [chancesSignal, _] = createSignal<number[]>([...Array(chances).keys()]);

  createEffect(() => {
    getFocus();
  });

  const getFocus = () => isActivePlayer(player) && (textField as HTMLInputElement).focus();

  const handleChange = (event: KeyboardEvent) => {
    if (event.code === 'Enter') {
      nextPlayer();
    }
  };

  return (
    <div
      classList={{
        [styles['player-section']]: true,
        [styles['player-section--active']]: matchInfo.activePlayer === player,
      }}
    >
      <h2>Player {player}</h2>
      <div class={styles['player-section__chances']}>
        <For each={chancesSignal()}>{chance => <ChanceMarker />}</For>
      </div>
      <Show
        when={isActivePlayer(player)}
        fallback={<TextField id='prova' name='prova' value='' label='Digit a number' disabled={true} />}
      >
        <TextField
          ref={textField}
          id={`player-${player}-input`}
          name={`player-${player}-input`}
          value=''
          label='Guess the number'
          disabled={false}
          onChange={handleChange}
          handleFocusOut={getFocus}
        />
      </Show>
    </div>
  );
};

export default PlayerSection;
