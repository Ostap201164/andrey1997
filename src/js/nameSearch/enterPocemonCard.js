import { getPokeWithName } from "../service/api.js";
let lastPoke;
const loaderEl = document.querySelector(".nameSearch__loader-subcontainer")
export async function enterPocemonCard(event) {
  event.preventDefault();
  const formData = new FormData(document.querySelector(".nameSearch__form"));

  const pokeName = formData.get("pokeName");

  if (pokeName == lastPoke || pokeName == "") {
    return 0;
  } else {
    lastPoke = pokeName;

    const reqest = await getPokeWithName(pokeName);
    const dataOfPoke = reqest.data;
    console.log(dataOfPoke);

    const pokeCard = document.querySelector(".nameSearch__subcontainer");

    const abilities = dataOfPoke.abilities;

    pokeCard.innerHTML = `<h2 class="nameSearch__h2">Pokemon Card: ${dataOfPoke.name}</h2>
            <div class="nameSearch__pokemon-card">
   <div class="nameSearch__spite-container"><img class="nameSearch__img"
                        src="${dataOfPoke.sprites.back_default}"
                        alt="poke img">
                </div>
                <div class="nameSearch__text-container">
                    <p class="nameSearch__abilities"><span>abilities:</span> <span>${abilities[0].ability.name}</span> <span>${abilities[1].ability.name}</span> 
                    </p>
                    <p class="nameSearch__physical"><span>physical:</span> <span class="nameSearch__height">${dataOfPoke.height * 10}cm</span>
                        <span class="nameSearch__weight">${dataOfPoke.weight / 10}kg</span> </p> 
                        </div>
                         </div>`;

    loaderEl.classList.add("is-hidden");                     
  }
}
