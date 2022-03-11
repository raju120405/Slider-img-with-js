const images =[
    'img/1 (1).jpg',
    'img/1 (2).jpg',
    'img/1 (3).jpg',
    'img/1 (4).jpg',
    'img/1 (5).jpg',
    'img/1 (6).jpg',
    'img/1 (7).jpg',
    'img/1 (8).jpg',
    'img/1 (9).jpg',
    'img/1 (10).jpg',
    'img/1 (11).jpg',
];
let imageIndex=0;
const imgElement = document.getElementById('slider-img')
setInterval(()=>{
    if(imageIndex>=images.length){
        imageIndex=0
    }
    const imgUrl = images[imageIndex];
    imgElement.setAttribute('src',imgUrl)
    imageIndex++
},1000)