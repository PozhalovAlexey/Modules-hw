import Game from '../Game/game';
import {GameSavingData} from "../Game/game";
import loadGame from '../Game/game'
import saveGame from '../Game/game'
// import {Game,GameSavingData}, loadGame,saveGame from'../Game/game.js' Не понимаю почему не работает!!!!

console.log(GameSavingData,loadGame,saveGame)



const game = new Game();
game.start();