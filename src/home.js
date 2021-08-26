const home = (content)=>`

    <div class="row mx-0 mt-0 mb-3 p-0 ">
        
        <img class="p-0" src="${content.attributes.banner}">
        
    </div>

    <div class="row mx-5 mt-5 mb-3 p-0 text-center">
        <h1 style="color: #1B57A6">${content.attributes.title}</h1>
    </div>
    
    <div class="row m-0 p-0 justify-content-center">
        <div class="col-10 p-5 container-text" >

            ${content.body}
    
        </div>
    </div>

    <div class="row mx-5 mt-5 mb-3 p-0 text-center">
        <h1 class="text-light">Redes Sociales</h1>
    </div>

    <div class="row mx-0  p-0 justify-content-center">
        <div class="col-11 col-lg-5 my-3 justify-content-center">
        
            <a class="twitter-timeline" data-width="500" data-height="600" data-theme="light" href="https://twitter.com/CCP_Exactas?ref_src=twsrc%5Etfw">Tweets by CCP_Exactas</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        
        </div>
        <div class="col-11 col-lg-5 my-3 justify-content-center">
        
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCCPExactas%2F%3Fref%3Dpy_c&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="600" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" data-adapt-container-width="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        
        </div>
    </div>
`;

module.exports = home;
