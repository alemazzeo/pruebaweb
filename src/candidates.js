const candidates = function (content){

    let counselorsTitular = "";
    let counselorsAlternate = "";

    for (const counselor of content.counselors.titular){
        counselorsTitular += `
                <li class="list-group-item" style="color: #1B57A6">
                    <span class="fw-bolder">${counselor.lastname}</span> ${counselor.name}
                </li>
        `
    }
    for (const counselor of content.counselors.alternate){
        counselorsAlternate += `
                <li class="list-group-item">
                    <span class="fw-bolder">${counselor.lastname}</span> ${counselor.name}
                </li>
        `
    }
    return`

    <div class="row mx-0 my-3 p-0 justify-content-center">
        <div class="col-11 col-lg-10 justify-content-center">
            <div class="row mx-0 p-0 justify-content-center">
                <h1 class="text-center" style="color: #1B57A6">   
                    Candidatxs 
                </h1>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-5 mt-2 justify-content-center">
              <div class="col-10 col-md-5 py-0 my-0 justify-content-center">
                  <div class="container-text py-3">
                    <div class="row px-3 pt-1 text-center"> 
                        <h2>${content.dean.short.attributes.title}</h2>
                    </div>
                    <div class="card px-3 border-0" style="height: 40rem">
                      <img src="${content.dean.short.attributes.image}" class="card-img-top" alt=" Dean Image">
                      <div class="card-body border-0">
                        <h4 class="card-title">${content.dean.short.attributes.name}</h4>
                        <p class="card-text">${content.dean.short.body}</p>
                      </div>
                      <div class="card-footer align-self-end bg-white border-0">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#readMoreOne"> Leer más </a>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="col-10 col-md-5  py-0 my-0  justify-content-center">
                  <div class="container-text py-3">
                    <div class="row px-3 pt-1 text-center"> 
                        <h2>${content.vicedean.short.attributes.title}</h2>
                    </div>
                    <div class="card px-3 border-0" style="height: 40rem">
                      <img src="${content.vicedean.short.attributes.image}" class="card-img-top" alt="Vicedean Image">
                      <div class="card-body border-0">
                        <h4 class="card-title">${content.vicedean.short.attributes.name}</h4>
                        <p class="card-text">${content.vicedean.short.body}</p>
                      </div>
                      <div class="card-footer align-self-end bg-white border-0">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#readMoreTwo"> Leer más </a>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            
            <div class="modal fade" id="readMoreOne" tabindex="-1" aria-labelledby="readMoreOneLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel">${content.dean.large.attributes.title}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="container-text">
                        <div class="card my-3 p-0 mx-0 border-0">
                            <div class="row g-0 ms-5 p-0">
                              <div class="col-md-4">
                                <img src="${content.dean.large.attributes.image}" class="img-fluid rounded-start h-100" alt="Dean Image">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h4 class="card-title">${content.dean.large.attributes.name}</h4>
                                  <p class="card-text">${content.dean.large.body}</p>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="readMoreTwo" tabindex="-1" aria-labelledby="readMoreTwoLabel" aria-hidden="true">
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" id="exampleModalLabel">${content.vicedean.large.attributes.title}</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="container-text">
                        <div class="card my-3 mx-0 p-0 border-0 ">
                            <div class="row g-0 ms-5 p-0">
                              <div class="col-md-4 ">
                                <img src="${content.vicedean.large.attributes.image}" class="img-fluid rounded-start h-100" alt="Vicedean Image">
                              </div>
                              <div class="col-md-8">
                                <div class="card-body">
                                  <h4 class="card-title">${content.vicedean.large.attributes.name}</h4>
                                  <p class="card-text">${content.vicedean.large.body}</p>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row my-3 justify-content-center">
                <div class="col-10 container-text justify-content-center">
                    <div class="row px-3 pt-1">
                        <h2 class="text-center" style="color: #1B57A6">   
                            Consejerxs 
                        </h2> 
                    </div>
                    <div class="row m-3 justify-content-center">
                        <div class="col-8 col-lg-5 mt-2">
                            <div class="row text-center">
                                <h4>Titulares</h4>
                            </div>
                            <div class="row ">
                                <ul class="list-group list-group-flush text-center">
                                    ${counselorsTitular}
                                </ul>
                            </div>   
                        </div>
                        <div class="col-8 col-lg-5 mt-2">
                            <div class="row text-center">
                                <h4>Suplentes</h4>
                            </div>
                            <div class="row ">
                                <ul class="list-group list-group-flush text-center">
                                    ${counselorsAlternate}
                                </ul>
                            </div>     
                        </div>              
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `
}

module.exports = candidates;


