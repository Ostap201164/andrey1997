import { getPokeWithName } from "./service/api.js";
import { enterPocemonCard } from "./nameSearch/enterPocemonCard.js";
import { swiper } from "./abilitySearch/swiper.js";
import { enterCardsToSwiper } from "./abilitySearch/enterCadsToSwiper.js";
import { findNesPoke } from "./abilitySearch/filter.js";
document
  .querySelector(".nameSearch__form")
  .addEventListener("submit", enterPocemonCard);
swiper();

document
  .querySelector(".abilitySearch__form")
  .addEventListener("submit", enterCardsToSwiper);
  
document
  .querySelector(".abilitySearch__filter-form")
  .addEventListener("submit", findNesPoke);
