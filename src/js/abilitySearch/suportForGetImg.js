import { arrOfPoke } from "./getImagesOfPoke";

export function makeImgLink(reqest, poke) {
  if (reqest.data.sprites.back_default != null) {
    const img = reqest.data.sprites.back_default;
    arrOfPoke.push({ name: poke.pokemon.name, img: img });
    return img;
  } else {
    const img = reqest.data.sprites.front_default;
    arrOfPoke.push({ name: poke.pokemon.name, img: img });
    return img;
  }
}

export function addPhotos(firstImg, secondImg, firstPoke, secondPoke) {
  return `<div class="swiper-slide">
                    <img src="${firstImg}" alt="${firstPoke.pokemon.name}">
                    <img src="${secondImg}" alt="${secondPoke.pokemon.name}">
                </div>  `;
}
