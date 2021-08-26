const activities = function (content){

    let itemsCarousel = "";
    for (const item of content.carousel){
        itemsCarousel += `
            <div class="carousel-item ${item === content.carousel[0] ? "active" : ""}">
              <img src="${item}" class="d-block w-100" alt="..." style="transform: scale(0.8)">
            </div>
        `
    }

    let carouselIndicators = "";
    for(let i = 0; i < content.carousel.length; i++){
        carouselIndicators += `
            <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="${i}" class="${i === 0 ? "active" : ""}" aria-current="true" aria-label="Slide ${i + 1}"></button>
        `
    }

    let oldActivities ="";
    for(let activity of content.activities){
        oldActivities += `
        <div class="row mx-0 my-3 p-0 container-text">
            <div class="col-12 col-lg-7">
                <div class="row m-0 px-0 py-3">
                    ${activity.attributes.media}
                
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="row m-0 p-3">
                
                    <h3>${activity.attributes.title}</h3>
                
                </div>
                <div class="row m-0 p-3">
                
                    <h5>${activity.body}</h5>
                
                </div>

            </div>
        </div>
            `
    }

    return  `

    <div class="row mx-0 my-3 p-0 justify-content-center">
    
        <div class="col-11 col-lg-10 justify-content-center">
            <h1 class="text-center" style="color: #1B57A6">   
                Actividades 
            </h1>
        </div>
        
        <div class="row m-0 p-0">
            <div id="carouselIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
              
                ${carouselIndicators}
                
              </div>
              
              <div class="carousel-inner">
             
                 ${itemsCarousel}
        
              </div>
              
              <button class="carousel-control-prev " type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon carousel-dark" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              
              <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon carousel-dark" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
        </div>
    </div>

    <div class="row m-0 p-0 justify-content-center">
        <div class="col-11 col-lg-10 justify-content-center">
    
        ${oldActivities}
    
        </div>
    </div> 
    
`;
}

module.exports = activities;