const internHTML = ({name, role, id, email, school}) => {
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
        <li class="list-group-item">school: ${school}</li>
      </ul>
    </div>`
}

module.exports = internHTML;