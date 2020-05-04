const baseURL = 'http://localhost:3000/api/sightings/'

export default {
  getSightings(){
    return fetch(baseURL)
    .then(res => res.json())
  },

  postBird(payload){
    return fetch(baseURL, {
      method: 'post',
      body: JSON.stringify(payload),
      headers: {'Content-type': 'application/json'}
    })
    .then(res => res.json())
  },

  deleteBird(id){
    return fetch(baseURL + id, {method: 'delete'})
  }
}
