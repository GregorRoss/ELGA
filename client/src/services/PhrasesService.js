const baseURL = 'http://localhost:9000/api/phrases/';

export const getPhrases = () => {
  return fetch(baseURL)
    .then(res => res.json())
};