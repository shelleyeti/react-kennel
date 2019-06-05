const remoteURL = "http://localhost:5002"

export default {
  search (resource, input) {
    return fetch(`${remoteURL}/${resource}?name_like=${input}`).then(e => e.json())
  }
}