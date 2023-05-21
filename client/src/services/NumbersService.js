const baseURL = 'http://localhost:9000/api/numbers/';

const NumbersService = {
    getNumbers() {
        return fetch(baseURL)
        .then(res => res.json());
    }
};

export default NumbersService;