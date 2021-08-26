const join = function (content){
    let listAdherents="";
    let i =1
    for (const adherent of content.joined){
        listAdherents += `
                <tr>
                  <th scope="row">${i}</th>
                  <td>${adherent.lastname}</td>
                  <td>${adherent.name}</td>
                  <td>${adherent.dependence}</td>
                </tr>
        `
        i+=1
    }
    return`

    
    <div class="row m-0 p-0 justify-content-center">
        <div class="row m-3 p-0 text-center" style="color: #1B57A6">
            <h1>${content.invitation.attributes.title}</h1> 
        </div> 
        <div class="row m-0 p-0 justify-content-center">
            <div class="col-10 p-5 container-text" >
    
                ${content.invitation.body}
                
                <p class="mt-2">Podés completar el 
                 <a href="${content.invitation.attributes.form}">formulario</a> 
                </p> 

        
            </div>
            
        </div>
        
        
        
        <div class="row m-3 p-0 text-center" style="color: #1B57A6">
            <h1>Lista de adherentes</h1> 
        </div>
        <div class="col-12 col-lg-10 p-2 justify-content-center container-text">
            <table class="table w-100">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Dependencia del cargo</th>
                </tr>
              </thead>
              <tbody>
                  ${listAdherents}
              </tbody>
            </table>
        </div>
    </div>
    `
}

module.exports = join;