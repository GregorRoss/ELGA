const baseURL = 'http://localhost:9000/api/images/';

export const getImages = () => {
  return fetch(baseURL)
    .then(res => res.json())
};