const managerHTML = ({name, role, id, email, office}) => {
    return `
    <div class="card" style="width: 18rem;">
      <h5 class="card-header">
        ${name}
        <br>
        ${role}  
      </h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: ${email}</li>
        <li class="list-group-item">Office Number: ${office}</li>
      </ul>
    </div>`
}

module.exports = managerHTML;