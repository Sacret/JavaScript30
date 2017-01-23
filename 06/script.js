const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const currentValue = this.value.trim();
  const matchArray = findMatches(currentValue, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(currentValue, 'gi');
    const cityName = place.city.replace(regex,
      `<span class="search-form__suggestion--highlighted">${currentValue}</span>`);
    const stateName = place.state.replace(regex,
      `<span class="search-form__suggestion--highlighted">${currentValue}</span>`);

    return `
      <li>
        <span class="search-form__suggestion-name">
          ${cityName}, ${stateName}
        </span>
        <span class="search-form__suggestion-population">
          ${numberWithCommas(place.population)}
        </span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search-form__search-input');
const suggestions = document.querySelector('.search-form__suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
