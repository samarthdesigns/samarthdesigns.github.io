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
            else if(data[i].tags.includes('animationer')){
                contentList.animation.push(i);
            }
            else if(data[i].tags.includes('illustrationer')){
                contentList.illustration.push(i);
            }
            else{
                continue;
            }
        }
        else{
            displayDribbbleContent(contentList,data);
        }
    }
}

function displayDribbbleContent(list, data){
    console.log(list);
    console.log(data);
}