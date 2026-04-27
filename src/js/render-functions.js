import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const createGalleryItem = image => {
  return `
    <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
            <img class="gallery-image" src="${image.previewURL}" data-source="${image.largeImageURL}" alt="${image.name}" />
        </a>
    </li>
  `;
};

export const createGallery = images => {
  galleryContainer.innerHTML = images
    .map(image => createGalleryItem(image))
    .join('');
  gallery.refresh();
};

export const clearGallery = () => {
  galleryContainer.innerHTML = '';
};

export const showLoader = () => {};

export const hideLoader = () => {};
