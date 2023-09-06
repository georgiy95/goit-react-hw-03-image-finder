const API_KEY = '33717102-715c10c4f2cae8a60768f134f'; 
const BASE_URL = 'https://pixabay.com/api/';
const PICS_ON_PAGE = 12;
export const getSearch = (searchText, page) => {
  const params = new URLSearchParams({
    q: searchText,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PICS_ON_PAGE,
  });
  return fetch(`${BASE_URL}?${params}`) 
    .then(resp => resp.json());
};
