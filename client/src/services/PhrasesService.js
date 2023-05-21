const baseURL = 'http://localhost:9000/api/phrases/';

const PhrasesService = {
    getPhrases() {
        return fetch(baseURL)
        .then(res => res.json());
    }
};

export default PhrasesService;