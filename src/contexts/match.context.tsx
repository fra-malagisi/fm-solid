import { createContext, FlowComponent, useContext } from 'solid-js';
import { createStore, produce } from 'solid-js/store';

export type MatchInfo = {
  isMatchStarted: boolean;
  numberOfPlayers: number;
  chances: number;
  activePlayer: number;
};

export type MatchStore = { matchInfo: MatchInfo; setNumberOfPlayers: (numberOfPlayers: number) => void };

const MatchContext = createContext<MatchStore>({
  matchInfo: { isMatchStarted: false, numberOfPlayers: 0, chances: 3, activePlayer: 0 },
  setNumberOfPlayers: (numberOfPlayers: number) => {},
});

export const MatchProvider: FlowComponent = (props: any) => {
  const [matchInfo, setMatchInfo] = createStore<MatchInfo>({
      isMatchStarted: false,
      numberOfPlayers: 0,
      chances: 3,
      activePlayer: 0,
    }),
    store: MatchStore = {
      matchInfo,
      setNumberOfPlayers: (numberOfPlayers: number) => {
        setMatchInfo(produce((matchInfo: MatchInfo) => (matchInfo.numberOfPlayers = numberOfPlayers)));
        randomStart();
      },
    };

  const randomStart = () => {
    const intervalReference = setInterval(() => {
      setMatchInfo(
        produce(
          (matchInfo: MatchInfo) =>
            (matchInfo.activePlayer = Math.floor(Math.random() * matchInfo.numberOfPlayers + 1))
        )
      );
    }, 200);
    setTimeout(() => {
      clearInterval(intervalReference);
      setMatchInfo(produce((matchInfo: MatchInfo) => (matchInfo.isMatchStarted = true)));
    }, 4000);
  };

  return <MatchContext.Provider value={store}>{props.children}</MatchContext.Provider>;
};

export const useMatch = () => {
  return useContext<MatchStore>(MatchContext);
};
