import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const createGallery = (galleryItems) => {
    const galleryMarkup = galleryItems
      .map((galleryItem) => {
        const { preview, original, description } = galleryItem;

        return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          >
        </a>
      </li>`;
      })
      .join("");
    return galleryMarkup;
  };
  const photosMarkup = createGallery(galleryItems);
console.log(photosMarkup);
galleryList.insertAdjacentHTML("beforeend", photosMarkup);

const handleGalleryClick = (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
      return;
    }
    const urlOriginal = event.target.dataset.source;
    console.log(urlOriginal);
    const instance = basicLightbox.create(`<img src="${urlOriginal}">`);
  instance.show();
  const handleOnEscKeyPress = (event) => {
    if (event.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", handleOnEscKeyPress);
    }
  };

  window.addEventListener("keydown", handleOnEscKeyPress);
};
galleryList.addEventListener("click", handleGalleryClick);

  