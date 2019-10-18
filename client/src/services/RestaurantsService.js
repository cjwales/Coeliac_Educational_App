const baseURL = 'http://localhost:3000/api/restaurants/'

export default {
  getRestaurants(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  // postBooking(payload){
  //   return fetch(baseURL, {
  //     method: 'POST',
  //     body: JSON.stringify(payload),
  //     headers: { 'Content-Type': 'application/json'}
  //   })
  //   .then(res => res.json())
  // },
  // deleteBooking(id){
  //   return fetch(baseURL + id, {
  //     method: 'DELETE'
  //   })
  // },

}