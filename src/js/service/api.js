import axios from "axios";
const loaderEl = document.querySelector(".nameSearch__loader-subcontainer");
export async function getPokeWithName(pokeName) {
  try {
    loaderEl.classList.remove("is-hidden");
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokeName}`
    );
    return res;
  } catch {
    const pokeNameEl = document.querySelector(".nameSearch__h2");
    pokeNameEl.textContent = "this Pokemon doesn`t exist lol";
    loaderEl.classList.add("is-hidden");
  }
}

export async function getPokeWithAbility(ability) {
  try {
    loaderEl.classList.remove("is-hidden");
    const res = await axios.get(`https://pokeapi.co/api/v2/ability/${ability}`);
    console.log(res);
    return res
  } catch {
    const pokeAbilityEl = document.querySelector(".abilitySearch__h2");
    pokeAbilityEl.textContent = "this Ability doesn`t exist lol";
    loaderEl.classList.add("is-hidden");
  }
}
