document.addEventListener('DOMContentLoaded', function () {
    var recipeId = getRecipeIdFromUrl();

    if (recipeId) {
        var recipe = getRecipeById(recipeId);

        if (recipe) {
            displayRecipe(recipe);
        } else {
            showRecipeNotFound();
        }
    } else {
        showRecipeNotFound();
    }
});

function getRecipeIdFromUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    return id ? parseInt(id) : null;
}

// find recipe by ID
function getRecipeById(id) {
    for (var i = 0; i < recipes.length; i++) {
        if (recipes[i].id === id) {
            return recipes[i];
        }
    }
    return null;
}

// display recipe details
function displayRecipe(recipe) {
    var recipeDetail = document.getElementById('recipeDetail');
    var isFavorite = checkIfFavorite(recipe.id);
    var favoriteButtonText = isFavorite ? 'Remove from Favorites' : 'Add to Favorites';
    var favoriteButtonClass = isFavorite ? 'btn-favorite active' : 'btn-favorite';

    // Build ingredients list and step list
    var ingredientsList = '<ul class="ingredients-list list-unstyled">';
    recipe.ingredients.forEach(function (ingredient) {
        ingredientsList += '<li>• ' + ingredient + '</li>';
    });
    ingredientsList += '</ul>';

    var stepsList = '<ol class="steps-list">';
    recipe.steps.forEach(function (step) {
        stepsList += '<li>' + step + '</li>';
    });
    stepsList += '</ol>';

    var html =
        '<div class="card-body">' +
        '<h2>' + recipe.name + '</h2>' +
        '<div class="mb-3">' +
        '<span class="badge badge-category me-2">' + recipe.category + '</span>' +
        '<span class="badge badge-time">' + recipe.time + '</span>' +
        '</div>' +
        '<button class="btn ' + favoriteButtonClass + ' mb-4" id="favoriteBtn" onclick="toggleFavorite(' + recipe.id + ')">' +
        favoriteButtonText +
        '</button>' +
        '<h4>Ingredients</h4>' +
        ingredientsList +
        '<h4 class="mt-4">Instructions</h4>' +
        stepsList +
        '</div>';

    recipeDetail.innerHTML = html;
}

function showRecipeNotFound() {
    document.getElementById('recipeDetail').style.display = 'none';
    document.getElementById('recipeNotFound').style.display = 'block';
}

function checkIfFavorite(recipeId) {
    var favorites = getFavorites();
    return favorites.includes(recipeId);
}


function getFavorites() {
    var favorites = localStorage.getItem('favorites');
    if (favorites) {
        return JSON.parse(favorites);
    }
    return [];
}

function saveFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
function toggleFavorite(recipeId) {
    var favorites = getFavorites();
    var index = favorites.indexOf(recipeId);

    if (index === -1) {
        // Add to favorites
        favorites.push(recipeId);
    } else {
        // Remove from favorites
        favorites.splice(index, 1);
    }

    saveFavorites(favorites);


    var btn = document.getElementById('favoriteBtn');
    if (favorites.includes(recipeId)) {
        btn.textContent = 'Remove from Favorites';
        btn.classList.add('active');
    } else {
        btn.textContent = 'Add to Favorites';
        btn.classList.remove('active');
    }
}
