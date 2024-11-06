const API_KEY = '46929640-6caf07f74187fad8fc62b9d85';
const URL = 'https://pixabay.com/api';

export function fetchData(input = "") {
  const params = new URLSearchParams({
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    q: input,
  });
  return fetch(`${URL}/?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}
