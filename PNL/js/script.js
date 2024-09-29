
// Generate Image----------

let currentIndex = 0;

function generateImage() {
  console.log("generateImage");

  let bg = randomPart("", 9);
  setBackground(bg);


  let eye = randomPart("eye", 23);
  setEyes(eye);

  let mouth = randomPart("mouth", 22);
  setMouth(mouth);

  setShirt("./assets/shirt.png");

  setBody(randomPart("hat", 1));

}


function randomPart(part, range) {
  const randomIndex = Math.floor(Math.random() * range) + 1;
  return `./assets/${part}${randomIndex}.png`;
}

// Attach event listener to the generate button
document.querySelector('#generateLink').addEventListener('click', generateImage);

function downloadImage() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const BGG = document.getElementById('BGG');
  const bodyImg = document.getElementById('Body');
  const shirtImg = document.getElementById('shirt');
  const eyesImg = document.getElementById('eyes');
  const mouthImg = document.getElementById('mouth');

  // Set canvas size based on the body image
  canvas.width = bodyImg.naturalWidth;
  canvas.height = bodyImg.naturalHeight;

  
  // Draw each image onto the canvas if it exists
  if (BGG.src) ctx.drawImage(BGG, 0, 0);
  if (bodyImg.src) ctx.drawImage(bodyImg, 0, 0);
  if (shirtImg.src) ctx.drawImage(shirtImg, 0, 0);
  if (eyesImg.src) ctx.drawImage(eyesImg, 0, 0);
  if (mouthImg.src) ctx.drawImage(mouthImg, 0, 0);

  // Create a link for downloading the image
  const link = document.getElementById('downloadLink');
  link.href = canvas.toDataURL('image/png'); // Get the canvas data as a PNG
  link.download = 'downloaded_image.png'; // Set the default name of the downloaded file
}

// Attach downloadImage to click event
document.getElementById('downloadLink').addEventListener('click', downloadImage);







// Function to change the background of the canvas
function setBackground(imagePath) {
  // const canvas = document.getElementById('canvas');
  // canvas.style.backgroundImage = `url(${imagePath})`;

  const backImage = document.getElementById('BGG');
  backImage.src = imagePath;
  backImage.classList.remove('hidden');
}


function setBody(imageSrc) {
  const bodyImage = document.getElementById('Body');
  bodyImage.src = imageSrc;
  bodyImage.classList.remove('hidden');  // Make sure the image is visible
}

// Set eyes image
function setEyes(imageSrc) {
  const eyesImage = document.getElementById('eyes');
  eyesImage.src = imageSrc;
  eyesImage.classList.remove('hidden');  // Make sure the image is visible
}

function setShirt(imageSrc) {
  const shirt = document.getElementById('shirt');
  shirt.src = imageSrc;
  shirt.classList.remove('hidden');
}

function setMouth(imageSrc) {
  const mouth = document.getElementById('mouth');
  mouth.src = imageSrc;
  mouth.classList.remove('hidden');
}



const background = document.getElementById('background');
const backgroundList = document.getElementById('backgroundList');
const iconText = document.getElementById('iconText');

background.addEventListener('click', () => {
  if (iconText.classList.contains('close-icon')) {
    backgroundList.classList.remove('active');
    iconText.classList.remove('close-icon');
    iconText.innerText = 'Background';
  } else {

    backgroundList.classList.add('active');
    iconText.classList.add('close-icon');
    iconText.innerText = '';
  }
});

// For bodyImage------------------------

const bodyImg = document.getElementById('bodyImg');
const bodyList = document.getElementById('bodyList');
const bodyiconText = document.getElementById('bodyiconText');

bodyImg.addEventListener('click', () => {
  if (bodyiconText.classList.contains('close-icon')) {
    bodyList.classList.remove('active');
    bodyiconText.classList.remove('close-icon');
    bodyiconText.innerText = 'Body';
  } else {

    bodyList.classList.add('active');
    bodyiconText.classList.add('close-icon');
    bodyiconText.innerText = '';
  }
});


// For Shades ----------------------

const shadesImg = document.getElementById('shadesImg');
const shadesList = document.getElementById('shadesList');
const shadesiconText = document.getElementById('shadesiconText');

shadesImg.addEventListener('click', () => {
  if (shadesiconText.classList.contains('close-icon')) {
    shadesList.classList.remove('active');
    shadesiconText.classList.remove('close-icon');
    shadesiconText.innerText = 'Shades';
  } else {

    shadesList.classList.add('active');
    shadesiconText.classList.add('close-icon');
    shadesiconText.innerText = '';
  }
});


// Cloth 

const clothesImg = document.getElementById('clothesImg');
const clothesList = document.getElementById('clothesList');
const clothesiconText = document.getElementById('clothesiconText');

clothesImg.addEventListener('click', () => {
  if (clothesiconText.classList.contains('close-icon')) {
    clothesList.classList.remove('active');
    clothesiconText.classList.remove('close-icon');
    clothesiconText.innerText = 'Clothes';
  } else {
    clothesList.classList.add('active');
    clothesiconText.classList.add('close-icon');
    clothesiconText.innerText = '';
  }
});


// Mouth

const mouthImg = document.getElementById('mouthImg');
const mouthList = document.getElementById('mouthList');
const mouthiconText = document.getElementById('mouthiconText');

mouthImg.addEventListener('click', () => {
  if (mouthiconText.classList.contains('close-icon')) {
    mouthList.classList.remove('active');
    mouthiconText.classList.remove('close-icon');
    mouthiconText.innerText = 'Mouth';
  } else {
    mouthList.classList.add('active');
    mouthiconText.classList.add('close-icon');
    mouthiconText.innerText = '';
  }
});


