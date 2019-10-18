const baseURL = 'http://localhost:3000/api/restaurants/'

export default {
  getRestaurants(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  postRestaurant(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deleteRestaurant(id){
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }


}
