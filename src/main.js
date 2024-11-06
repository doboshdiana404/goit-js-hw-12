import { createMarcup } from './js/render-functions.js';
import { fetchData } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.search-form');
const list = document.querySelector('.gallery-list');
const input = document.querySelector('.search-input');
const load = document.querySelector(".loading");
let gallery = new SimpleLightbox('.gallery-list li a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 300,
});

form.addEventListener('submit', handeSearch);

function handeSearch(event) {
  event.preventDefault();
  let imageInput = input.value.trim();
  
if (!imageInput) {
    iziToast.error({
        maxWidth: 500,
        position: 'topRight',
        title: 'Warning',
        color: 'orange',
        message: 'Enter a search word!',
      });
      return;
}
load.classList.add("loader");
  fetchData(imageInput)
    .then(data => {
      console.log(data);
load.classList.remove("loader");
      if (!data.hits.length) {
        

        iziToast.error({
            maxWidth: 432,
            position: 'topRight',
            title: 'Error',
            color: 'red',
            message: 'Sorry, there are no images matching your search query. Please try again!',
          });
          form.reset();
          list.innerHTML = "";
          return;
      }
      list.innerHTML = createMarcup(data.hits);
      gallery.refresh();
      form.reset();      

    })
    .catch(error => {
      console.log(error);
    });
}
