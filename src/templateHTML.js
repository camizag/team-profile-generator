const renderHTML = ((engineerHTML, internHTML, managerHTML)=>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
        <title>My Team</title>
    </head>
    <body>
      <!-- Header -->
      <div class="container-fluid main-heading">
        <div class="header-container">
            <div class="jumbotron">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
      </div>
    
      <!-- Cards -->
      <div class="row d-flex justify-content-around">
    
        <!-- Engineer Card-->
        ${engineerHTML}
        

        <!-- Intern Card -->
        ${internHTML}
    
    
        <!-- Manager Card -->
        ${managerHTML}
      
      </div>  
    
    </body>
    </html>`
});

module.exports = renderHTML;