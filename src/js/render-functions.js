
export function createMarcup(arr,page=1) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="item-card">
        <a href="${largeImageURL}"><img class="item-img" src="${webformatURL}" alt="${tags}"  width="360" /></a>
        <ul class="list-description">
        <li class="item-description">
        <h3 class="description-title">Likes</h3>
        <p class="description-count">${likes}</p>
        </li>
        <li class="item-description">
        <h3 class="description-title">Views</h3>
        <p class="description-count">${views}</p>
        </li>
        <li class="item-description">
        <h3 class="description-title">Comments</h3>
        <p class="description-count">${comments}</p>
        </li>
        <li class="item-description">
        <h3 class="description-title">Downloads</h3>
        <p class="description-count">${downloads}</p>
        </li>
        </ul>
        </li>
        `).join("");
}
