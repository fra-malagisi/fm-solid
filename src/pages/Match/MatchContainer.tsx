import { Component, Switch, Match } from 'solid-js';
import { useMatch } from '../../contexts/match.context';
import { PlayerBoard } from './player-board';
import SelectNumberOfPlayers from './select-number-of-players/SelectNumberOfPlayers';

export type MatchInfo = {
  numberOfplayers: number;
};

const MatchContainer: Component = () => {
  const { matchInfo, setNumberOfPlayers } = useMatch();

  return (
    <Switch fallback={<p>Loading..</p>}>
      <Match when={matchInfo.numberOfPlayers === 0}>
        <SelectNumberOfPlayers handleChoice={setNumberOfPlayers} />
      </Match>
      <Match when={matchInfo.numberOfPlayers !== 0}>
        <PlayerBoard numberOfPlayers={matchInfo.numberOfPlayers} />
      </Match>
    </Switch>
  );
};

export default MatchContainer;