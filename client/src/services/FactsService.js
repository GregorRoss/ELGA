const baseURL = 'http://localhost:9000/api/facts/';

export const getFacts = () => {
  return fetch(baseURL)
    .then(res => res.json())
};