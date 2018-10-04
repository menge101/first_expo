import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.0.2.2:8000'
})

const getHashes = () => {
    hashes = api
        .get('/upcoming_trails')
        .then(result => {
            console.log(result);
            return result.data['trails']
        })
        .catch(error => {
            console.log(error);
            return []
        })
    return hashes
}

export default {
    getHashes,
}