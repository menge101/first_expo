import axios from 'axios'

const CLIENT_ID = 'xroCtBbe2NdyOijF9LdfVg'
const YELP_API_KEY = 'oToPJ4oi322al7DUfKpApxUsCpi0R8DFHv8WJzEofpc6aWfefL14E2fUDwC3cuTY4iVpBJUYsEZ1zNjC9vHIj6ZjbBL-83jE7wBf0FXEcD5IHV8HmFeqImA-5KCEW3Yx'

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: 'Bearer ${YELP_API_KEY}',
  },
})

const getCoffeeShops = userLocation => {
    console.log("User Location")
    console.log(userLocation)
  return api
    .get('/businesses/search', {
      params: {
        limit: 10,
        categories: 'coffee',
        ...userLocation,
      },
    })
    .then(res =>
      res.data.businesses.map(business => {
        return {
          name: business.name,
          coords: business.coordinates,
        }
      })
    )
    .catch(error => console.log(error))
}

export default {
  getCoffeeShops,
}
