import { createMarcup } from './js/render-functions.js';
import { fetchData } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const form = document.querySelector('.search-form');
const list = document.querySelector('.gallery-list');
const input = document.querySelector('.search-input');
const load = document.querySelector('.loading');
const loadEnd = document.querySelector('.load-end');
const loadMore = document.querySelector('.js-load-more');
let imageInput = '';
let page = 1;
const countItem = 15;
let gallery = new SimpleLightbox('.gallery-list li a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 300,
});

form.addEventListener('submit', handeSearch);
loadMore.addEventListener('click', onLoadMore);

async function handeSearch(event) {
  event.preventDefault();
  const submitBtn = document.querySelector('.search-btn');
  loadMore.style.display = 'none';
  list.innerHTML = '';
  submitBtn.disabled = true;
  imageInput = input.value.trim();

  if (!imageInput) {
    iziToast.error({
      maxWidth: 500,
      position: 'topRight',
      title: 'Warning',
      color: 'orange',
      message: 'Enter a search word!',
    });
    list.innerHTML = '';
    loadMore.style.display = 'none';
    return;
  }
  load.classList.add('loader');
  try {
    const data = await fetchData(imageInput, (page = 1), countItem);
    load.classList.remove('loader');
    if (!data.hits.length) {
      iziToast.error({
        maxWidth: 432,
        position: 'topRight',
        title: 'Error',
        color: 'red',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      form.reset();
      list.innerHTML = '';
      loadMore.style.display = 'none';
      
      return;
    }
    loadMore.classList.add('load-more');

    list.insertAdjacentHTML('afterbegin', createMarcup(data.hits, page));
    gallery.refresh();

    if (page < Math.ceil(data.totalHits / 15)) {
      loadMore.style.display = 'inline-block';
    }

    form.reset();
  } catch (error) {
    alert(error.message);
  } finally {
    submitBtn.disabled = false;

  }
}

async function onLoadMore() {
  loadMore.style.display = 'none';
  loadEnd.classList.replace('visually-hidden', 'load-end-open');

  loadEnd.classList.add('loader');

  page++;

  loadMore.disabled = true;

  try {
  const data = await fetchData(imageInput, page, countItem);
 
  let remainder = countItem - data.hits.length;
    if (page * countItem <= data.totalHits + remainder) {
          loadMore.style.display = 'inline-block';      
    } else{
      loadMore.classList.add("load-more-hidden");
           loadMore.style.display = 'none';      

      iziToast.show({
        position: 'topRight',
        messageColor: 'blue',
        message: `The end of search results.`,
      });  
    }

    list.insertAdjacentHTML('beforeend', createMarcup(data.hits, page));
    gallery.refresh();
    const card = document.querySelector('.item-card');
    const cardHeight = card.getBoundingClientRect().height;
    window.scrollBy({
      left: 0,
      top: cardHeight * 3 - 76,
      behavior: 'smooth',
    });
  } catch (error) {
    alert(error.message);
  } finally {
    loadMore.disabled = false;
    loadEnd.classList.remove('loader');
    loadEnd.classList.add('visually-hidden');
  }
}
