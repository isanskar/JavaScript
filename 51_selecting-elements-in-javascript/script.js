// const allImages = document.images
// const allImages = document.getElementsByTagName('img');

// const cssImage = document.getElementsByClassName('css-img')[0];
// const cssImage = document.getElementById('css-img')

// const cssImage = document.querySelectorAll('.css-img');
// const cssImage = document.querySelector('.css-img');

// const jsImage = document.querySelector('#Js-img');
// const jsImage = document.querySelector('[alt="javascript roadmap"]');

// nested 
// const li = document.querySelector('ul li')

const ul = document.querySelector('ul')

const imageInsideUl = ul.querySelector('.css-img')

const allImages = document.querySelectorAll('img')

const imageUrl = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHU8eOt_zTrtdS83rjNhNWgBDP8Yhl19rE0A&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkaCOJYouaht6vLpZQDSNBvs_h4gSiZAbmqw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdTRii-rDiegqpD7Qb9BXUQz9V-AG3y7vZA&s',
]

// allImages[0].src = imageUrl[0];
// allImages[1].src = imageUrl[1];
// allImages[2].src = imageUrl[2];

// for(let i=0;i<allImages.length;i++){
//     allImages[i].src = imageUrl[i];
// }

allImages.forEach( (image,i) => {
    image.src = imageUrl[i];
})