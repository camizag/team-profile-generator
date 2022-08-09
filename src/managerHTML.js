const managerHTML = ({name, role, numberId, mail, numberOffice}) => {
    return `
    <div class="card" style="width: 18rem;">
      <h5 class="card-header">
        ${name}
        <br>
        ${role}  
      </h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${numberId}</li>
        <li class="list-group-item">Email: ${mail}</li>
        <li class="list-group-item">Office Number: ${numberOffice}</li>
      </ul>
    </div>`
}

module.exports = managerHTML;