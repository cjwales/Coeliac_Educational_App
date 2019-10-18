const baseURL = 'http://localhost:3000/api/restaurants/'

export default {
  getRestaurants(){
    return fetch(baseURL)
    .then(res => res.json())
  },
}
