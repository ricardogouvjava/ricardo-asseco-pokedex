const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon?limit=150";
const API = "https://pokeapi.co/api/v2/pokemon/";
const parentElement = document.querySelector(".gridPoki");
const toSearch = document.querySelector(".toSearch");

const POKIS_PER_PAGE = 18;
const currPokis = [];

const getXPokis = async function (page) {
  for (let i = POKIS_PER_PAGE * page; i <= (page + 1) * POKIS_PER_PAGE; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async function (i) {
  const response = await fetch(`${API}${i}/`);
  //console.log(response);
  const data = await response.json();
  //console.log(data);
  //console.log(data.abilities, data.sprites.front_default);
  currPokis.push(data);
  renderPoki(data);
};

const renderPoki = function (poki) {
  const html = `<div class="pokiElement">  
   <div class="img-container">
        <img src="${poki.sprites.front_default}" alt="image">
    </div>
    <div class="info">
        <span class="pokId">#${poki.id}</span>
        <h3 class="name">${poki.name}</h3>
    </div>
    </div>`;
  //console.log(html);
  parentElement.insertAdjacentHTML("beforeend", html);
};

const init = function () {
  getXPokis(1);
  console.log(currPokis);
};
init();
const pokis = Array.from(document.querySelectorAll(".pokiElement"));
console.log(pokis);
pokis.forEach((pokiEl) => pokiEl.addEventListener("click", handleClick));

const handleClick = function (e) {
  e.preventDefault();
  console.log(e.target);
};

toSearch.addEventListener("change", (e) => console.log(e));
