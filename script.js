const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

function addDoggo() {
    // fetching data from BREEDS_URL and processing into JSON
    fetch(BREEDS_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const img = document.createElement('img'); // creating img element
            img.src = data.message;
            img.alt = 'cute doggo';

            document.querySelector('.doggos').appendChild(img); // appending img into doggos class
        })

}

document.querySelector('.add-doggo').addEventListener("click", addDoggo);