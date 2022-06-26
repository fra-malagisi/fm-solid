import { Component, Switch, Match } from 'solid-js';
import { createStore } from 'solid-js/store';
import SelectNumberOfPlayers from './SelectNumberOfPlayers';

export type MatchInfo = {
  numberOfplayers: number;
};

const PlayerBoard: Component = () => {
  const [matchInfo, setMatchInfo] = createStore<MatchInfo>({ numberOfplayers: 0 });

  const handleNumberOfPlayersChoice = (numberOfPlayers: number) => {
    setMatchInfo('numberOfplayers', numberOfPlayers);
  };

  return (
    <Switch fallback={<p>Loading..</p>}>
      <Match when={matchInfo.numberOfplayers === 0}>
        <SelectNumberOfPlayers handleChoice={handleNumberOfPlayersChoice} />
        {matchInfo.numberOfplayers}
      </Match>
      <Match when={matchInfo.numberOfplayers !== 0}>{matchInfo.numberOfplayers}</Match>
    </Switch>
  );
};

export default PlayerBoard;
