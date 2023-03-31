const colors = [
    '#F9D8D8',
    '#FDF5E6',
    '#FEC101',
    '#5B392E',
    '#1E352F',
    '#F5EEDF',
    '#D6AF66',
    '#000000',
    '#6C2326',
    '#152540',
    '#DAA49A',
    '#AF5A2C',
    '#FFFFFF',
    '#C6D1CC',
    '#6BB0D8',
    '#E32636',
    '#F5EEDF',
    '#D35400',
    '#0B2545',
    '#154734'
];

// Function to set a random color as the background color
function setRandomBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Call the function to set the background color on page load
setRandomBackgroundColor();



// List of image file names in the images folder
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
 
    'image10.jpg',
    'image11.jpg',
   
    'image13.jpg',
    'image14.jpg',
    'image15.jpg',
    'image16.jpg',
    'image17.jpg',
    'image18.jpg',

    // add more image file names here

  ];
  
  // Get a random image file name from the images array
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  // Set the image source to the random image file name
  const img = document.getElementById('randomImage');
  img.src = 'images/' + randomImage;
  

