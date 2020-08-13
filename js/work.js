let workFieldActive = localStorage.getItem('workFieldActive');

let uxWorkClick = document.getElementById('ux-work-activator');
let illustrationsWorkClick = document.getElementById('illustrations-work-activator');
let animationsWorkClick = document.getElementById('animations-work-activator');

let loaderCardsSection = document.getElementById('loader-work');
let uxWorkCards = document.getElementById('ux-work-cards');
let illustrationWorkCards = document.getElementById('illustration-work-cards');
let animationWorkCards = document.getElementById('animation-work-cards');

let accessToken = 'fc11579eae7eeff79656c5523121511e1c64e26e7130b5292b50f13e62e0edf0';

fetch('https://api.dribbble.com/v2/user/shots?access_token=' + accessToken, {
    method: 'GET',
})
.then(response => response.json()).then((data)=>{
    dribbbleDataSorter(data);
})

function dribbbleDataSorter (data) {

    let size = data.length;
    let i = null;
    let contentList = {
        ux:[],
        animation:[],
        illustration:[]
    }

    for(i=0;i<=size;i++){
        if(i!=size){

            if(data[i].tags.includes('uxer')){
                contentList.ux.push(i);
            }

            else{
            }

            if(data[i].tags.includes('animationer')){
                contentList.animation.push(i);
            }

            else{
            }

            if(data[i].tags.includes('illustrationer')){
                contentList.illustration.push(i);
            }

            else{
            }


        }
        else{
            displayDribbbleContent(contentList,data);
        }
    }
}

function displayDribbbleContent(list, data){

    loaderCardsSection.classList.add('hide');

    if(workFieldActive==='ux'){
        uxWorkClick.classList.add('text-blue');
        uxWorkCards.classList.remove('hide');
        illustrationsWorkClick.classList.remove('text-pink');
        illustrationWorkCards.classList.add('hide');
        animationsWorkClick.classList.remove('text-orange');
        animationWorkCards.classList.add('hide');
    }
    else if(workFieldActive==='illustration'){
        uxWorkClick.classList.remove('text-blue');
        uxWorkCards.classList.add('hide');
        illustrationsWorkClick.classList.add('text-pink');
        illustrationWorkCards.classList.remove('hide');
        animationsWorkClick.classList.remove('text-orange');
        animationWorkCards.classList.add('hide');
    }
    else if(workFieldActive==='animation'){
        uxWorkClick.classList.remove('text-blue');
        uxWorkCards.classList.add('hide');
        illustrationsWorkClick.classList.remove('text-pink');
        illustrationWorkCards.classList.add('hide');
        animationsWorkClick.classList.add('text-orange');
        animationWorkCards.classList.remove('hide');
    }

    let size = data.length;

    displayUX(size, list.ux, data);
    displayIllustrations(size, list.illustration, data);
    displayAnimations(size, list.animation, data);

}

function displayUX (size, displayNumbers, data){
    let i = null;
    let allIllustrationsCode = '';
    for(i=0;i<=size;i++){
        if(i!=size){
            if(displayNumbers.includes(i)){
                allIllustrationsCode = allIllustrationsCode + '<a href="' + data[i].html_url +'" target="_blank"><div class="work-card"><img src="' + data[i].images.normal +'" alt="' + data[i].description +'"><p>' + data[i].title +'</p></div></a>';
            }
        }
        else{
            document.getElementById('ux-work-cards').innerHTML = allIllustrationsCode;
        }
    }

}

function displayIllustrations (size, displayNumbers, data){
    let i = null;
    let allIllustrationsCode = '';
    for(i=0;i<=size;i++){
        if(i!=size){
            if(displayNumbers.includes(i)){
                allIllustrationsCode = allIllustrationsCode + '<a href="' + data[i].html_url +'" target="_blank"><div class="work-card"><img src="' + data[i].images.normal +'" alt="' + data[i].description +'"><p>' + data[i].title +'</p></div></a>';
            }
        }
        else{
            document.getElementById('illustration-work-cards').innerHTML = allIllustrationsCode;
        }
    }

}

function displayAnimations (size, displayNumbers, data){
    let i = null;
    let allIllustrationsCode = '';
    for(i=0;i<=size;i++){
        if(i!=size){
            if(displayNumbers.includes(i)){
                allIllustrationsCode = allIllustrationsCode + '<a href="' + data[i].html_url +'" target="_blank"><div class="work-card"><img src="' + data[i].images.normal +'" alt="' + data[i].description +'"><p>' + data[i].title +'</p></div></a>';
            }
        }
        else{
            document.getElementById('animation-work-cards').innerHTML = allIllustrationsCode;
        }
    }

}

uxWorkClick.addEventListener('click', function (e) {
    uxWorkClick.classList.add('text-blue');
    uxWorkCards.classList.remove('hide');
    illustrationsWorkClick.classList.remove('text-pink');
    illustrationWorkCards.classList.add('hide');
    animationsWorkClick.classList.remove('text-orange');
    animationWorkCards.classList.add('hide');
})

illustrationsWorkClick.addEventListener('click', function (e) {
    uxWorkClick.classList.remove('text-blue');
    uxWorkCards.classList.add('hide');
    illustrationsWorkClick.classList.add('text-pink');
    illustrationWorkCards.classList.remove('hide');
    animationsWorkClick.classList.remove('text-orange');
    animationWorkCards.classList.add('hide');
})

animationsWorkClick.addEventListener('click', function (e) {
    uxWorkClick.classList.remove('text-blue');
    uxWorkCards.classList.add('hide');
    illustrationsWorkClick.classList.remove('text-pink');
    illustrationWorkCards.classList.add('hide');
    animationsWorkClick.classList.add('text-orange');
    animationWorkCards.classList.remove('hide');
})


