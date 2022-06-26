import { Accessor, createContext, FlowComponent, useContext } from 'solid-js';
import { createStore, produce } from 'solid-js/store';

export type MatchInfo = {
  numberOfPlayers: number;
};

export type MatchStore = { matchInfo: MatchInfo; setNumberOfPlayers: (numberOfPlayers: number) => void };

const MatchContext = createContext<MatchStore>({
  matchInfo: { numberOfPlayers: 0 },
  setNumberOfPlayers: (numberOfPlayers: number) => {},
});

export const MatchProvider: FlowComponent = (props: any) => {
  const [matchInfo, setMatchInfo] = createStore<MatchInfo>({ numberOfPlayers: 0 }),
    store: MatchStore = {
      matchInfo,
      setNumberOfPlayers: (numberOfPlayers: number) =>
        setMatchInfo(produce((matchInfo: MatchInfo) => (matchInfo.numberOfPlayers = numberOfPlayers))),
    };

  return <MatchContext.Provider value={store}>{props.children}</MatchContext.Provider>;
};

export const useMatch = () => {
  return useContext<MatchStore>(MatchContext);
};
