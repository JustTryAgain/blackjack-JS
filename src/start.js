import './scss/style.scss';
import {Players} from "./game/players.js";
import {render} from "./game/render.js";
import {Game} from "./game/game";

let pl = new Players(['Test0', 'Test1', 'Test2', 'Test3']);
let players = pl.getPlayers();
let game = new Game(players);

const getHit = document.querySelector('.btn-hit');


getHit.addEventListener('click', () => {
    console.log(game.getWinners());
    game.getWinners();
    if (game.hit()) {
        render(players);
        return true;
    }
});

const getStand = document.querySelector('.btn-stand');

getStand.addEventListener('click', () => {
    game.stand();
    game.getWinners();
    render(players);
  console.log();
})

