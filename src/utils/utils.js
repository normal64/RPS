import {WINNER_COMBO} from "./var"
export function resetGame() {
  document.querySelector(".game-container").classList.remove("hide");
  document.querySelector(".winner-container").classList.add("hide");
  document.querySelector(".outcome").classList.add("hide");
  document.querySelector(".container-text").classList.add("hide");
}

export function updateUI(userIcon, aiIcon, outcome_text, user, ai) {
  document.querySelector(".user-results").innerHTML = userIcon;
  document.querySelector(".user-results").classList.add(`${user.selected}`);
  document.querySelector(".user-results").classList.add(`selectable`);

  document.querySelector(".ai-results").innerHTML = aiIcon;
  document.querySelector(".ai-results").classList.add(`${ai.selected}`);
  document.querySelector(".ai-results").classList.add(`selectable`);

  document.querySelector("#won-text").innerHTML = outcome_text;
  document.querySelector(".game-container").classList.add("hide");
  document.querySelector(".outcome").classList.remove("hide");
  document.querySelector(".winner-container").classList.remove("hide");
  if (outcome_text == "You won") {
    document.querySelector(".container-text").classList.remove("hide");
  }
}
export function calculateWinner(user, ai,PLAYER_SCORE,setPLAYER_SCORE) {
    if (user.beats == ai.selected) {
      let newScore = PLAYER_SCORE;
      newScore++;
      setPLAYER_SCORE(newScore);

      updateUI(user.icon, ai.icon, "You won", user, ai);
      return;
    }
    if (user.selected == ai.selected) {
      updateUI(user.icon, ai.icon, "Draw", user, ai);
      return;
    }
    updateUI(user.icon, ai.icon, "You lost", user, ai);
  }
  export function ai_selected() {
    const RandomIndex = Math.floor(Math.random() * WINNER_COMBO.length);
    return WINNER_COMBO[RandomIndex];
  }