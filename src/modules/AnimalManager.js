const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/animals`).then(e => e.json())
  },
  deleteAnimal(id) {
    // debugger
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE",
      header: {
          "Content-Type": "application/json"
      }
    })//.then(e => e.json())
  },
  editAnimal(editObj) {
    return fetch (`${remoteURL}/animals/${editObj.id}`,
            {
                method:"PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(editObj)
            })
        .then(e => e.json())
  },
  makeAnimal(makeObj) {
    return fetch(`${remoteURL}/animals`,
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