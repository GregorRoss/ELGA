const baseURL = 'http://localhost:9000/api/images/';

const ImagesService = {
    getImages() {
        return fetch(baseURL)
        .then(res => res.json());
    }
};

export default ImagesService;