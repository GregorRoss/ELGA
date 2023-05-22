const baseURL = 'http://localhost:9000/api/numbers/';

export const getNumbers = () => {
  return fetch(baseURL)
    .then(res => res.json())
};

