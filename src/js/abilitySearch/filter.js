import { arrOfPoke } from "./getImagesOfPoke";
export function findNesPoke(event) {
  event.preventDefault();

  const formData = new FormData(
    document.querySelector(".abilitySearch__filter-form")
  );

  const name = formData.get("name");

  const textEl = document.querySelector(".abilitySearch__poke-name");

  let img;

  console.log(arrOfPoke);

  
  let existOfPoke = false;

  arrOfPoke.map((item) => {
    if (item.name == name) {
      img = item.img;
      existOfPoke = true;
    }
  });

  if (existOfPoke == false) {
    textEl.textContent = "Name: your poke doesn`t exist";
    return 0;
  }

  textEl.textContent = `Name: ${name}`;

  document.querySelector(
    ".abilitySearch__place-for-photo"
  ).innerHTML = `<img src=${img} alt=poke>`;
}
