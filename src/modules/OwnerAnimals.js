const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/ownerAnimals/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/ownerAnimals`).then(e => e.json())
  },
  deleteOwnerAnimal(id) {
    return fetch(`${remoteURL}/ownerAnimals/${id}`, {
      method: "DELETE",
      header: {
          "Content-Type": "application/json"
      }
    }).then(e => e.json())
  },
  editOwnerAnimal(editObj) {
    return fetch (`${remoteURL}/ownerAnimals/${editObj.id}`,
            {
                method:"PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(editObj)
            })
        .then(e => e.json())
  },
  makeOwnerAnimal(makeObj) {
    return fetch(`${remoteURL}/ownerAnimals`,
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