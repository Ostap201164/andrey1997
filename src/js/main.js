import { getPokeWithName } from "./service/api.js";
import { enterPocemonCard } from "./nameSearch/enterPocemonCard.js";
document.querySelector(".nameSearch__form").addEventListener("submit", enterPocemonCard)


