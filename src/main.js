import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery } from './js/render-functions.js';


const form = document.querySelector('.form');

const showEmptyResultNotification = () => {
  iziToast.show({
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    color: 'red',
    position: 'topRight',
    timeout: 3000,
  });
};

form.addEventListener('submit', event => {
  event.preventDefault();
  const { target: searchForm } = event;
  const queryString = searchForm.elements['search-text'].value.trim();

  getImagesByQuery(queryString)
    .then(data => {
      if (data.hits.length === 0) {
        showEmptyResultNotification();
        return;
      }

      createGallery(data.hits);
      console.log(data.hits);
    })
    .catch(error => {
      console.error(error);
    });
});
