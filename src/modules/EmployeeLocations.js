const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employeeLocations/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employeeLocations`).then(e => e.json())
  },
  deleteEmployeeLocation(id) {
    return fetch(`${remoteURL}/employeeLocations/${id}`, {
      method: "DELETE",
      header: {
          "Content-Type": "application/json"
      }
    }).then(e => e.json())
  },
  editEmployeeLocation(editObj) {
    return fetch (`${remoteURL}/employeeLocations/${editObj.id}`,
            {
                method:"PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(editObj)
            })
        .then(e => e.json())
  },
  makeEmployeeLocation(makeObj) {
    return fetch(`${remoteURL}/employeeLocations`,
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