export function render(players) {
  let node = document.querySelector('.player-fields');
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
  for (let i = 0; i < players.length; i++) {

    let place = document.querySelector('.player-fields');
    let fragmentPlayer = document.createDocumentFragment();
    let playerDiv = document.createElement('div');
    let h2 = document.createElement('h2');
    let fieldDiv = document.createElement('div');
    let handDiv = document.createElement('div');
    let scoreDiv = document.createElement('div');

    playerDiv.classList.add('player');
    fieldDiv.classList.add('wrapper-player-field');
    handDiv.classList.add('player-cards');
    scoreDiv.classList.add('score' + players[i].Id);

    fragmentPlayer.append(playerDiv);
    playerDiv.append(h2);
    playerDiv.appendChild(fieldDiv).appendChild(handDiv);
    playerDiv.append(scoreDiv);
    playerDiv.classList.add('P_' + players[i].Id);
    h2.textContent = (players[i].Name);
    handDiv.classList.add('hand_' + players[i].Id);
    scoreDiv.textContent = ('Score:' + players[i].getScore());
    place.append(fragmentPlayer);

    for (let j = 0; j < players[i].Hand.length; j++) {
      let wrapper = document.createElement('div');
      let divBotNum = document.createElement('div');
      let divNum = document.createElement('div');
      let divImg = document.createElement('div');
      let img = document.createElement('img');
      let fragCard = document.createDocumentFragment();

      wrapper.classList.add('card');
      divNum.classList.add('head-num');
      divImg.classList.add('suite');
      divBotNum.classList.add('bottom-num');
      img.setAttribute('src', players[i].Hand[j].Src);
      divNum.textContent = players[i].Hand[j].Value;
      divBotNum.textContent = players[i].Hand[j].Value;

      let places = document.querySelector('.hand_' + players[i].Id);
      fragCard.appendChild(wrapper);
      wrapper.appendChild(divNum);
      wrapper.appendChild(divImg).appendChild(img);
      wrapper.appendChild(divBotNum);

      places.append(fragCard);
    }
  }
}

export function activePlayer(currPlayer) {

    let on = document.querySelector('.P_' + currPlayer);
    on.classList.toggle('active');
    for (let i = currPlayer; i > 0; i--) {
        let off = document.querySelector('.P_' + i);
        off.classList.toggle('active');
    }
}

export function winners(arr){
  document.querySelector('.winner').style.display = "block";
  for (let i = 0; i<arr.length;i++){
    document.querySelector('.winner').textContent = 'Winners: ' + arr[i] + ' ';
  }
}
