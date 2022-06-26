import { Component, Switch, Match } from 'solid-js';
import { useMatch } from '../../contexts/match.context';
import SelectNumberOfPlayers from './SelectNumberOfPlayers';

export type MatchInfo = {
  numberOfplayers: number;
};

const PlayerBoard: Component = () => {
  const { matchInfo, setNumberOfPlayers } = useMatch();

  return (
    <Switch fallback={<p>Loading..</p>}>
      <Match when={matchInfo.numberOfPlayers === 0}>
        <SelectNumberOfPlayers handleChoice={setNumberOfPlayers} />
        {matchInfo.numberOfPlayers}
      </Match>
      <Match when={matchInfo.numberOfPlayers !== 0}>{matchInfo.numberOfPlayers}</Match>
    </Switch>
  );
};

export default PlayerBoard;
