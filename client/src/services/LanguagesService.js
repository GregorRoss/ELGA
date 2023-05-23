const baseURL = 'http://localhost:9000/api/languages/';

export const getLanguageList = () => {
  return fetch(baseURL)
    .then(res => res.json())
};