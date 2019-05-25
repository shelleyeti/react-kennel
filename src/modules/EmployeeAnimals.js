const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employeeAnimals/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employeeAnimals`).then(e => e.json())
  },
  deleteEmployeeAnimal(id) {
    return fetch(`${remoteURL}/employeeAnimals/${id}`, {
      method: "DELETE",
      header: {
          "Content-Type": "application/json"
      }
    }).then(e => e.json())
  },
  editEmployeeAnimal(editObj) {
    return fetch (`${remoteURL}/employeeAnimals/${editObj.id}`,
            {
                method:"PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(editObj)
            })
        .then(e => e.json())
  },
  makeEmployeeAnimal(makeObj) {
    return fetch(`${remoteURL}/employeeAnimals`,
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