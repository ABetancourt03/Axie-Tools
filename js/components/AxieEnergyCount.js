import {energy} from '../App.js';

export default function AxieEnergyCount() {
  return `
    <div class="axie-energy-count">
      <div class="energy-container">
        <img class="energy" src="assets/img/energyIcon.svg" alt="Energy Icon">
        <h4 class="actual-energy">${energy}/10</h4>
      </div>
      
      <div class="energy-buttons">
        <div class="energy-btn quit-energy">-1</div>
        <div class="energy-btn add-energy">+1</div>
      </div>

      <div class="match-buttons">
        <div class="energy-btn next-round">Next Round</div>
        <div class="energy-btn reset">New Game</div>
      </div>
    </div>
  `;
}
