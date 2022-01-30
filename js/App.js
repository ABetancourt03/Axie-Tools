import {$} from './helpers/getElements.js';
import AxieEnergyCount from './components/AxieEnergyCount.js';

const $root = $('.root');
const $body = document.body;

export default function App() {
  $root.innerHTML += AxieEnergyCount();
}

export let energy = 3;
let roundNumber = 1;

document.addEventListener('click', (e) => {
  const $round = $('.round');
  const $actualEnergy = $('.actual-energy');

  if (e.target.textContent === '-1') {
    energy--;
    if (energy < 0) {
      energy = 0;
    }
    $actualEnergy.innerHTML = `${energy}/10`;
  }
  if (e.target.textContent === '+1') {
    energy++;
    if (energy > 10) {
      energy = 10;
    }
    $actualEnergy.innerHTML = `${energy}/10`;
  }
  if (e.target.textContent === 'Next Round') {
    roundNumber++;
    energy++;
    energy++;
    if (energy > 10) {
      energy = 10;
    }
    $actualEnergy.innerHTML = `${energy}/10`;
    $round.innerHTML = `Round ${roundNumber}`;
  }
  if (roundNumber === 10) {
    $body.classList.add('bloodmoon-course');
  }
  if (e.target.textContent === 'New Game') {
    roundNumber = 1;
    energy = 3;
    $actualEnergy.innerHTML = `${energy}/10`;
    $round.innerHTML = `Round ${roundNumber}`;
    $body.classList.remove('bloodmoon-course');
  }
});
