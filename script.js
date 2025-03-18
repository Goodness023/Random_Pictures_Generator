// Select the image container and button elements
const imageContainerEL = document.querySelector(".image-container");
const btnEL = document.querySelector(".btn");

// Event listener for "Load More" button click
btnEL.addEventListener("click", () => {
  let imageNum = 15; // Number of new images to be added
  addNewImages(imageNum); // Call function to generate images
});

// Function to generate and append new images
function addNewImages(imageNum) {
  for (let index = 0; index < imageNum; index++) {
    const newImgEL = document.createElement("img"); // Create a new <img> element

    // Set the image source to a random image from Picsum Photos
    newImgEL.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 3000 // Generate a random number to ensure unique images
    )}`;

    // Add the new image to the image container
    imageContainerEL.appendChild(newImgEL);
  }
}
