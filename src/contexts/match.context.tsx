import { createContext, FlowComponent, useContext } from 'solid-js';
import { createStore, produce } from 'solid-js/store';

export type MatchInfo = {
  isMatchStarted: boolean;
  randomNumber: number;
  numberOfPlayers: number;
  chances: number;
  activePlayer: number;
};

export type MatchStore = {
  matchInfo: MatchInfo;
  setNumberOfPlayers: (numberOfPlayers: number) => void;
  isActivePlayer: (player: number) => boolean;
  nextPlayer: () => void;
};

const MatchContext = createContext<MatchStore>({
  matchInfo: { isMatchStarted: false, numberOfPlayers: 0, chances: 3, activePlayer: 0, randomNumber: 0 },
  setNumberOfPlayers: (numberOfPlayers: number) => {},
  isActivePlayer: (player: number) => false,
  nextPlayer: () => {},
});

export const MatchProvider: FlowComponent = (props: any) => {
  const [matchInfo, setMatchInfo] = createStore<MatchInfo>({
      isMatchStarted: false,
      numberOfPlayers: 0,
      chances: 3,
      activePlayer: 0,
      randomNumber: 0,
    }),
    store: MatchStore = {
      matchInfo,
      setNumberOfPlayers: (numberOfPlayers: number) => {
        setMatchInfo({
          ...matchInfo,
          numberOfPlayers: numberOfPlayers,
          randomNumber: getRandomNumber(),
        });
        randomStart();
      },
      isActivePlayer: (player: number) => matchInfo.isMatchStarted && matchInfo.activePlayer === player,
      nextPlayer: () =>
        setMatchInfo(
          produce(
            (matchInfo: MatchInfo) =>
              (matchInfo.activePlayer =
                matchInfo.activePlayer === matchInfo.numberOfPlayers ? 1 : matchInfo.activePlayer + 1)
          )
        ),
    };

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 101);
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
