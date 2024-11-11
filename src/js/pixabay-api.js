import axios from "axios";

const API_KEY = '46929640-6caf07f74187fad8fc62b9d85';
const URL = 'https://pixabay.com/api/';

const countItem = 15;

export async function fetchData(input = "", page = 1, countItem) {
  
  try {
    const response = await axios(`${URL}`, {
    params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    q: input,
    page,
    per_page: countItem
    }
  });
  return response.data;
  } catch (error) {
    alert(error.message);
  }
  
  
}

