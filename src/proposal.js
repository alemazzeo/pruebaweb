const proposal = function (content) {
    return `

    <div class="row m-0 p-0 justify-content-center">
    <div class="row m-3 p-0 text-center" style="color: #1B57A6"> 
        <h1>${content.attributes.title}</h1> 
    </div>
    <div class="col-11 col-lg-10 container-text justify-content-center">
        <div class="justify-content-center pt-5 px-5">
            ${content.body}
        </div>
        
        <div class="float-end pb-5 px-5">
            <button class="btn btn-primary" style="color: white" href="${content.attributes.viewMoreLink}"> Ver más</button>
        </div>
    </div>
    </div>
`
}
module.exports = proposal;
