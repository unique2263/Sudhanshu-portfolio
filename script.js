// back to top animation 

var backTop = document.getElementById('back-top');
backTop.addEventListener('click', function(){
    var initialPos = window.pageYOffset;
    var finalPos = 0;
    if(initialPos > finalPos){
    var id = setInterval(function(){
        window.scrollBy(0,-50);
        initialPos -= 50;
        if(initialPos <= finalPos){
            clearInterval(id);
            return;
        }
    }, 20);

}
});


// smooth scroll animation 

var navList = document.querySelectorAll('.nav-menu a');
var id;
for(var i=0; i< navList.length; i++){
        navList[i].addEventListener('click', function(event){
                event.preventDefault();

                var sectionId = this.textContent.trim().toLowerCase();

                var sectionTargeted = document.getElementById(sectionId);

                id = setInterval(function(){
                    scrollDiv(sectionTargeted)
                }, 20);
        });
}

function scrollDiv(sectionTargeted){
    var coordinateTargeted = sectionTargeted.getBoundingClientRect();
    if(coordinateTargeted.top <= 0){
        clearInterval(id);
        return;
    }
    window.scrollBy(0,50);
}

// skill progress animation

var progress = document.getElementsByClassName('per');

function initialiseBar(bar){
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progress){
    initialiseBar(bar);
}

function fillBar(bar){
    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-progress");
    var interval = setInterval(function(){
        if(currentWidth >= targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);
}

function isBarVisible(){
    for(let bar of progress){
        var barCoordinates = bar.getBoundingClientRect();
        if((bar.getAttribute("data-visited") == "false") && 
        (barCoordinates.top <= (window.innerHeight - barCoordinates.height)) && 
        (barCoordinates.top >0)){
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if((barCoordinates.top > window.innerHeight) || (barCoordinates.bottom < 0)){
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }
    }
}

window.onscroll = function(){
    isBarVisible();
    }








