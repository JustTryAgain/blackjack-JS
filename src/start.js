import './scss/style.scss';
import {Players} from "./game/players.js";
import {activePlayer, render, renderCounter, winners} from "./game/render.js";
import {Game} from "./game/game";

let pl = new Players(['Test0', 'Test1', 'Test2', 'Test3']);
let players = pl.getPlayers();
let game = new Game(players);
activePlayer(game.getActivePlayer());

document.querySelector('.btn-hit').addEventListener('click', () => {
    if (game.hit()) {
        render(players);
        renderCounter(game.leftInDeck());
        activePlayer(game.getActivePlayer());
        return true;
    }
    winners(game.getWinners());
});

document.querySelector('.btn-stand').addEventListener('click', () => {
    if (game.stand()) {
        render(players);
        renderCounter(game.leftInDeck());
        activePlayer(game.getActivePlayer());
        return true;
    }
    winners(game.getWinners());
});

document.querySelector('.winner').addEventListener('click', () => {
    document.querySelector('.P_' + (players.length - 1)).classList.remove('active');
    document.querySelector('.winner').style.display = 'none';
    game.restart();
    render(players);
    renderCounter(game.leftInDeck());
    activePlayer(game.getActivePlayer());
})



