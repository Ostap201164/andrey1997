import { getPokeWithAbility } from "../service/api.js";
import { getImagesOfPoke } from "./getImagesOfPoke.js";
const formEl = document.querySelector(".abilitySearch__form");
const loaderEl = document.querySelector(".nameSearch__loader-subcontainer");
const textEl = document.querySelector(".abilitySearch__h2");

export async function enterCardsToSwiper(event) {
  event.preventDefault();
  const formData = new FormData(formEl);
  const ability = formData.get("pokeAbility");

  const pokeReqest = await getPokeWithAbility(ability);

  const pokeImages = await getImagesOfPoke(pokeReqest.data.pokemon);

  textEl.textContent = `Ability: ${ability}`;

  const swiperEl = document.querySelector(".swiper-wrapper");
  swiperEl.innerHTML = `${pokeImages}             <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>`;

  loaderEl.classList.add("is-hidden");
}
