const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

/* Declaring the alternative text for each image file */

/* Looping through images */
for( let i = 0; i < 5; i++ ) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', pici);
  newImage.setAttribute('alt', pici.jpg);
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
