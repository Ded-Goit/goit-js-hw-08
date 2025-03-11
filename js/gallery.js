"use strict";
/**we create an array of objects, where each object contains information about the image:
 * preview — a link to a small image for the gallery.
 * original — a link to a large image that opens in a modal window.
 * description — a text description of the image (used for alt and caption). */
const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

// We find the HTML element <ul class="gallery">, to which we will add images.
const galleryContainer = document.querySelector(".gallery");
/**Function for creating HTML markup .map(...) — iterate over the images array and generate HTML markup for each object.
 * ({ preview, original, description }) => ... — use object destructuring to get its properties.
 * <li class="gallery-item">...</li> — each gallery item contains:
 * <a class="gallery-link"> — link (to make the image clickable).
 * <img> — the image itself:
 * src="${preview}" — shows a small image.
 * data-source="${original}" — stores a link to a large image.
 * alt="${description}" — text description (for accessibility).*/
function createMarkup(array) {
  return array
    .map(
      ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
      </li>`
    )
    .join(""); //join all elements into a string (without a separator).
}

// insert the generated HTML markup at the end of galleryContainer.
galleryContainer.insertAdjacentHTML("beforeend", createMarkup(images));

galleryContainer.addEventListener("click", (event) => {
  event.preventDefault(); //Preventing standard browser behavior
  /**Checking whether the image was clicked.
   * If the user clicks on the background (<li>, <a>, or another element),
   * the code will not open a modal window. */
  if (!event.target.classList.contains("gallery-image")) {
    return;
  }

  const largeImageURL = event.target.dataset.source; //Get a link to a large image
  //Creating a modal window
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}">
  `);

  instance.show(); //Displaying a modal window
});
