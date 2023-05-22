const baseURL = 'http://localhost:9000/api/scores/'

export const getScores = () => {
  return fetch(baseURL)
    .then(res => res.json());
};

export const postScores = (payload) => {
  return fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json());
};

export const putScore = (id, payload) => {
    return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteScore = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

