// Global variables
let demoArray = []; // Empty array

// init
window.addEventListener("load", init);

function init() {
    getRecipes()
}

function getFavorites() {
    let localStorageString = localStorage.getItem("favorites"); // JSON-STRING

    console.log(localStorageString);


    if (localStorageString === null) {

    } else {
        console.log(demoArray);
        // console.log(localStorage.getItem("favorites")); // JSON-STRING

        console.log(localStorageString);
        demoArray = JSON.parse(localStorageString);

        for (let selectedHeartEmojis of demoArray) {
            console.log(selectedHeartEmojis);
            let favoriteRecipeId = document.getElementById(`favorite-recipes-${selectedHeartEmojis}`);
            favoriteRecipeId.style.display = 'block';
            let button = document.getElementById(`add-to-favorites-${selectedHeartEmojis}`);
            button.innerHTML = "Remove from favorites";
        }
    }
}

function addToFavorites(e) {
    let id = e.target.id.slice(17);
    console.log(id);

    if (!demoArray.includes(id)) {
        demoArray.push(`${id}`);
        console.log(localStorage.setItem("favorites", JSON.stringify(demoArray)));
        let favoriteRecipeId = document.querySelector(`#favorite-recipes-${id}`);
        favoriteRecipeId.style.display = 'block';
        console.log(favoriteRecipeId);
        console.log("Demoarray = " + demoArray);
        let button = document.getElementById(`add-to-favorites-${id}`);
        button.innerText = "Remove from favorites";

    } else {
        // demoArray.splice(, );
        let arrayPosition = demoArray.indexOf(id); // Index van de array bijv [1]
        demoArray.splice(arrayPosition, 1);
        console.log(localStorage.setItem("favorites", JSON.stringify(demoArray)));

        // Heart emoji
        let favoriteRecipeId = document.querySelector(`#favorite-recipes-${id}`);
        favoriteRecipeId.style.display = 'none';

        let buttonRemove = document.getElementById(`add-to-favorites-${id}`);
        buttonRemove.innerText = "Add to favorites";
    }
}

function getDetails(e) {
    let id = e.target.id.slice(12);

    fetch(`http://localhost/magazine/webservice?id=${id}`)
        .then(response => response.json()
        )

        .then(data => {
            let recipeDetails = document.querySelector('#recipe-details');
            recipeDetails.innerText = data.recipe.toString();
            console.log(recipeDetails);

            let recipeTags = document.querySelector('#recipe-tags');
            recipeTags.innerText = data.tags.toString();
            console.log(recipeTags);
        });
}

/**
 * Get recipes: Returns a collection of objects in JSON-format
 */
function getRecipes() {
    fetch("http://localhost/magazine/webservice")
        .then(response => response.json())
        .then(data => {
            for (let recipe of data) {
                createRecipe(recipe.id, recipe.name, recipe.kitchen, recipe.image);
            }
        })
        .then(data => getFavorites());
}

function createRecipe(id, name, kitchen, image) {
    let rowDiv = document.createElement('div');
    // rowDiv.classList.add('row');

    let recipeDiv = document.createElement('div'); // <div> in memory
    recipeDiv.classList.add('col-sm');
    recipeDiv.classList.add('card');

    let recipeTitle = document.createElement('h1');
    recipeTitle.innerText = name;
    recipeDiv.appendChild(recipeTitle);

    let heartEmojiFavorite = document.createElement('h2');
    heartEmojiFavorite.innerText = "😍";
    heartEmojiFavorite.setAttribute('id', `favorite-recipes-${id}`);
    heartEmojiFavorite.style.display = "none";
    recipeDiv.appendChild(heartEmojiFavorite);

    let recipeImage = document.createElement('img');
    recipeImage.src = `${image}`;
    recipeImage.classList.add('recipe-image');
    recipeDiv.appendChild(recipeImage);

    // Voeg toe als favoriet knop
    let recipeButtonOne = document.createElement('button');
    recipeButtonOne.classList.add('btn');
    recipeButtonOne.classList.add('btn-warning');
    recipeButtonOne.innerText = 'Add to favorites';
    recipeButtonOne.setAttribute('id', `add-to-favorites-${id}`);
    recipeButtonOne.addEventListener('click', addToFavorites);
    recipeDiv.appendChild(recipeButtonOne);

    let recipeButtonTwo = document.createElement('button');
    recipeButtonTwo.addEventListener('click', getDetails); // Event listener
    recipeButtonTwo.classList.add('btn');
    recipeButtonTwo.classList.add('btn-warning');
    recipeButtonTwo.innerText = 'Show recipe';
    recipeButtonTwo.setAttribute('id', `show-recipe-${id}`);
    recipeDiv.appendChild(recipeButtonTwo);

    rowDiv.appendChild(recipeDiv);

    let recipeWrapper = document.querySelector('.recipe-wrapper');
    recipeWrapper.appendChild(rowDiv);
}