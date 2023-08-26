import Game, {readGameSaving as loadGame, GameSavingData, writeGameSaving as saveGame} from '../Game/game';
console.log(Game,loadGame,GameSavingData,saveGame)
const game = new Game();
game.start();