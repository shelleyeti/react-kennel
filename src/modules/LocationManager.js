const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then(e => e.json())
  },
  deleteLocation(id) {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE",
      header: {
          "Content-Type": "application/json"
      }
    }).then(e => e.json())
  },
  editLocation(id, editObj) {
    return fetch (`${remoteURL}/locations/${id}`,
            {
                method:"PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(editObj)
            })
        .then(e => e.json())
  },
  makeLocation(makeObj) {
    return fetch(`${remoteURL}/locations/`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(makeObj)
        })
    .then(e => e.json())
      }
}