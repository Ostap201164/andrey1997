import { getPokeWithName } from "../service/api.js";
import { makeImgLink, addPhotos } from "./suportForGetImg.js";
export let arrOfPoke = [];

export async function getImagesOfPoke(arr) {
  arrOfPoke = [];
  let images = " ";
  if (arr.length % 2 == 0) {
    for (let i = 0; i < arr.length; i += 2) {
      const firstPoke = arr[i];
      const secondPoke = arr[i + 1];

      const firstReqest = await getPokeWithName(firstPoke.pokemon.name);

      const firstImg = makeImgLink(firstReqest, firstPoke);
      const secondReqest = await getPokeWithName(secondPoke.pokemon.name);

      const secondImg = makeImgLink(secondReqest, secondPoke);

      images += addPhotos(firstImg, secondImg, firstPoke, secondPoke);
    }
  } else {
    for (let i = 0; i < arr.length; i += 2) {
      const firstPoke = arr[i];
      const secondPoke = arr[i + 1];
      if (i + 1 != arr.length) {
        const firstReqest = await getPokeWithName(firstPoke.pokemon.name);

        const firstImg = makeImgLink(firstReqest, firstPoke);
        const secondReqest = await getPokeWithName(secondPoke.pokemon.name);

        const secondImg = makeImgLink(secondReqest, secondPoke);

        addPhotos(firstImg, secondImg, firstPoke, secondPoke);
      } else {
        const firstReqest = await getPokeWithName(firstPoke.pokemon.name);
        const firstImg = firstReqest.data.sprites.back_default;
        arrOfPoke.push({ name: firstPoke.pokemon.name, img: firstImg });
        images += `<div class="swiper-slide">
                    <img src="${firstImg}" alt="${firstPoke.pokemon.name}">
                    </div>  `;
      }
    }
  }

  return images;
}
