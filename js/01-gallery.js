import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('ul.gallery');
function createGallery(galleryItems) {
    const galleryMarkup = galleryItems.map(createGalleryElement).join('');
    galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup)
};

function createGalleryElement({preview, original, description}) {
return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
};

createGallery(galleryItems);

const instance = basicLightbox.create(`<img class='js-modal-img' src='' alt='' width="800" height="600">`);
const modalImg = instance.element().querySelector('.js-modal-img');

galleryRef.addEventListener('click', onClickGalleryItem);

function onClickGalleryItem(e) {
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  e.preventDefault();

  const imageSrcForModal = e.target.dataset.source;
  const imageAlt = e.target.alt;
  
  modalImg.src = imageSrcForModal;
  modalImg.alt = imageAlt;

  instance.show();
  document.addEventListener('keydown', onKeyDownEsc)
}

function onKeyDownEsc(e) {
  if (e.code.toLowerCase() !== 'escape') {
      return
  }
  instance.close()
  document.removeEventListener('keydown', onKeyDownEsc)
}
