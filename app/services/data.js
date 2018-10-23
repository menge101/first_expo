import axios from 'axios'

const api = axios.create({
    baseURL: 'http://10.0.2.2:8000'
})

const getHashes = async (region) => {
    hashes = await api
        .get('/upcoming_trails', {
            params: {
                region: region
            }
        })
        .then(result => {
            console.log(result);
            return result.data['events']
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