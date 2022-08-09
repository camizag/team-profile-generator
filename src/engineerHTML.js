const engineerHTML = ({name, role, id, email, github}) => {
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
        <li class="list-group-item">Github: ${github}</li>
      </ul>
    </div>`
}

module.exports = engineerHTML;