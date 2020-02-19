$(document).ready(function() {
    let cardsNumber = 7;
    $("#loadMore").click(function(event){
        $.ajax({
            dataType: "json",
            crossDomain: true,
            url: 'data.json',
            success:  function(activityData) 
            {
                const activityTemplateHtml = activityData.map(item => 
                `<div class="carousel-item col mb-4">
                    <div class="card text-center h-100 content">
                        <img src="${item.imgUrl}" class="card-img-top img-fluid" alt="...">
                        <div class="card-body">
                        <p class="card-text pt-0">${item.title}</p>
                        <p class="card-text">$ ${item.price}</p>
                        <div class="content-overlay"></div>
                        </div>
                        <div class="content-details fadeIn-right">
                        <div class="d-flex flex-row flex-wrap justify-content-around align-items-center">
                            <button class="btn btn-light card-text rounded-circle btn-circle-xl plus-button"><i class="fas fa-plus fa-2x"></i></button>
                            <button class="btn btn-light card-text rounded-circle btn-circle-xl like-button"><i class="fas fa-heart fa-2x"></i></button>
                        </div>
                        </div>
                    </div>
                </div>`).join('')
                $('#loadContainer').append(activityTemplateHtml)
                /* my try */
                const carouselNumeration = activityData.forEach(element => {
                    `<li data-target="#probeCarousel" data-slide-to="${cardsNumber+element.index+1}"></li>`
                }).join(''); 
                $('#numeration').append(carouselNumeration)                
            }
        });
    });

});